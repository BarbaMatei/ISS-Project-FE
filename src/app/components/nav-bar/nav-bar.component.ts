import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { loginUser } from 'src/app/models/loginUser';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavigationBarComponent implements OnInit {

  private logged = true;

  currentUser: loginUser = {
    username: 'blabla',
    password: '****'
  };

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit(): void {
  }


  // valoare pe care se bazeaza afisarea obiectelor
  // logged = true => afisam meniul din fata titlului
  // logged = false => afisam login si register
  // ar trebui sa se verifice ceva user de pe session-ul curent sau din localstorage si sa nu se
  // foloseasca o variabila
  navDisplay(): boolean{
    return this.logged;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  signOut(): void {
    this.authenticationService.logout();
        this.snackBar.open(
            `Successfully logged out.`,
            '',
            {
                duration: 1000
            }
        );
        this.router.navigate(['/login']);
  }
}
