import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from './models/loginUser';
import { AppStateService } from './services/app-state-service';
import { AuthenticationService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isMenuVisible = false;
  currentRoute: string;
  currentUser: loginUser = {
    username: 'blabla',
    password: '****'
  };

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private appStateService: AppStateService){
      this.currentRoute = '';
      this.authenticationService.currentUser.subscribe(
        (x) => (this.currentUser = x)
      );
      this.router.events.subscribe((event) => {
        this.currentRoute = location.pathname;
        this.isMenuVisible = !(
          this.currentRoute === '/login' || this.currentRoute === '/register'
        );
      });
  }

  ngOnInit(){
    if (localStorage.length) {
      this.currentUser.id = this.appStateService.getCurrentUserId();

      this.appStateService.updateSessionInfo({
          id: this.currentUser.id,
          username: this.currentUser.username,
          password: this.currentUser.password,
          access_token: this.currentUser.access_token,
          refresh_token: this.currentUser.refresh_token
      })
  }
  }
}
