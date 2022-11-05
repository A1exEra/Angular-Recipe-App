import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap } from 'rxjs';
import { AuthResponseData } from '../Models/auth.model';
import { throwError } from 'rxjs';
import { USER } from '../Models/User.mode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //   curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' \
  // -H 'Content-Type: application/json' \
  // --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'
  //your API KEY - AIzaSyCQj36ZTDdTaZN0acbC3hB1OT-2_-V8uKI

  private apiKey: string = 'AIzaSyCQj36ZTDdTaZN0acbC3hB1OT-2_-V8uKI';
  private signUpURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  private signInURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

  //store user subject and emit a new user and log him in or out using tokens
  user = new Subject<USER>();
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
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
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
      default:
        errorMessage = 'An unknown error occured';
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
  }
}
