import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { AuthResponseData } from '../Models/auth.model';
import { throwError } from 'rxjs';
import { USER } from '../Models/User.mode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  //   curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' \
  // -H 'Content-Type: application/json' \
  // --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'
  //your API KEY - AIzaSyCQj36ZTDdTaZN0acbC3hB1OT-2_-V8uKI

  private apiKey: string = 'AIzaSyCQj36ZTDdTaZN0acbC3hB1OT-2_-V8uKI';
  private signUpURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  private signInURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

  //store user subject and emit a new user and log him in or out using tokens
  // user = new Subject<USER>();
  //get acces to the token using the behaviorsubject which aalows us to acces the user dat after it has been initialized
  user = new BehaviorSubject<USER>(null);
  //create a variable to store token expiration timer for the settimeoout in autologout method
  private tokenExpirationTimer: any;
  signUp(email: string, password: string) {
    //send a post requesst to this URL -

    return this.http
      .post<AuthResponseData>(this.signUpURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  //login user
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signInURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  //auto login to retrieve the userdata from loca storage
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new USER(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogOut(expirationDuration);
    }
  }

  //logging out and setting the user back to null
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  //set a timer to uto log out user
  autoLogOut(expirationDuration: number) {
    console.log(`Session Expires in: ${expirationDuration}`);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
      console.log('SESSION EXPIRED!!!!!!!!!');
    }, expirationDuration);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!error.error || !error.error.error) {
      return throwError(errorMessage);
    }
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or user does not have a password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator';
        break;
    }
    return throwError(errorMessage);
  }

  //authentication
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new USER(email, userId, token, expirationDate);
    this.user.next(user);
    //activate the autoLogOut timer
    this.autoLogOut(expiresIn * 1000);
    //store user token in local storage
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
