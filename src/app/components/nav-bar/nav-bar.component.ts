import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavigationBarComponent implements OnInit {

  private logged = true;


  constructor(
    private router: Router,
  ) { }

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
    this.logged = !this.logged;
    this.router.navigate(['details']);
  }
}
