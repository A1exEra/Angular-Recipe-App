import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/shared/Models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    let authObservable: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      //add login login here
      authObservable = this.authService.login(email, password);
    } else {
      //signUp logic goes here
      authObservable = this.authService.signUp(email, password);
    }
    authObservable.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
}
