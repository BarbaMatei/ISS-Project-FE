import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register-service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss'],
})
export class RegisterCardComponent implements OnInit {
  registerForm!: FormGroup;

  isInputValid: boolean = false;
  registrationStatus: boolean = false;
  registrationMessage: string = '';

  responseUserObject?: User;
  roles: string[] = ["Student", "Teacher", "Staff"]

  constructor(
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormControls();
  }

  initFormControls(): void {
    this.registerForm = new FormGroup({
      registerFirstNameControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]+'),
      ]),
      registerLastNameControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]+'),
      ]),
      registerUserNameControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]+'),
      ]),
      registerRoleControl: new FormControl('', [Validators.required]),
      registerPasswordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  isRegisterFormCompleted(): boolean {
    return this.registerForm.touched;
  }

  isRegisterFormValid(): boolean {
    return this.registerForm.valid;
  }

  isRegisterFormDone(): boolean {
    return this.isRegisterFormCompleted() && this.isRegisterFormValid();
  }

  onRegisterUser(): void {
    const user: User = {
      first_name: this.registerForm.get('registerFirstNameControl')!.value,
      last_name: this.registerForm.get('registerLastNameControl')!.value,
      username: this.registerForm.get('registerUserNameControl')!.value,
      role: this.registerForm.get('registerRoleControl')!.value.toUpperCase(),
      password: this.registerForm.get('registerPasswordControl')!.value,
    };

    this.registerService.register(user).subscribe({
      next: (data: any) => {
        //this.responseUserObject = { ...data };
        this.snackBar.open(
          `User has been registered.`,
          '',
          {
            duration: 1000
          }
        );
        this.router.navigate(['/login']);
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, '', {
          duration: 3000
        });
      },
    });
  }
}
