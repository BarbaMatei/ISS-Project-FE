import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser';
import { Tokens } from 'src/app/models/tokens';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  loginForm!: FormGroup;
  isInputValid: boolean = false;
  loginStatus: boolean = false;
  loginMessage: string = '';
  error = '';
  responseUserObject?: loginUser;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmailControl: new FormControl('', []),
      loginPasswordControl: new FormControl('', [])
    });
  }

  isLoginFormCompleted(): boolean {
    return this.loginForm.touched;
  }

  isLoginFormValid(): boolean {
    return this.loginForm.valid;
  }

  isLoginFormDone(): boolean {
    return this.isLoginFormCompleted() && this.isLoginFormValid();
  }

  onLoginUser(): void {
    const user: loginUser = {
      username: this.loginForm.get('loginEmailControl')!.value,
      password: this.loginForm.get('loginPasswordControl')!.value,
    };
    this.loginService.login(user).subscribe({ 
      error: (error: Error) => {
        this.snackBar.open(error.message, '', {
          duration: 3000
        });
        
      },
        next: (data: loginUser) => {
        this.responseUserObject = { ...data };
        this.snackBar.open(`Login of user ${this.responseUserObject.username} successful!`,
          '',
          {
            duration: 3000
          })
          this.router.navigate(["/specialization"]);
      }
    });
  }
}
