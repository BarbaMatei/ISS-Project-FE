import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Role } from '../models/constants';
import { AppStateService } from '../services/app-state-service';
import { AuthenticationService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

@Injectable({ providedIn: 'root' })
export class StudentGuard implements CanActivate {
    constructor(
        private router: Router,
        private appState: AppStateService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var userRole = this.appState.getCurrentUserRole();
        if (userRole === "STUDENT") {
            // student
            return true;
        }
        

        // teacher/staff user
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

@Injectable({ providedIn: 'root' })
export class TeacherGuard implements CanActivate {
    constructor(
        private router: Router,
        private appState: AppStateService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var userRole = this.appState.getCurrentUserRole();
        if (userRole === "TEACHER") {
            // teacher
            return true;
        }
        else if(userRole === "STUDENT"){
            this.router.navigate(['/specialization'], { queryParams: { returnUrl: state.url } });
        }
        else{
            // teacher/staff
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        }
        return false;
    }
}