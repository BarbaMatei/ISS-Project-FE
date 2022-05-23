import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { loginUser } from '../models/loginUser';
import { AppStateService } from './app-state-service';
import { Tokens } from '../models/tokens';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<loginUser>;
    public currentUser: Observable<loginUser>;
    headers!: HttpHeaders;

    constructor(private http: HttpClient, private appStateService: AppStateService) {
        this.currentUserSubject = new BehaviorSubject<loginUser>(
            JSON.parse(localStorage.getItem('currentUser')!)
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): loginUser {
        return this.currentUserSubject.value;
    }

    login(user: loginUser): Observable<loginUser> {
        const params = new HttpParams({
            fromObject: {
              username: user.username,
              password: user.password
            }
          });
        
        
        this.headers = new HttpHeaders()
        .set('content-type', 'application/x-www-form-urlencoded')
        .set("Access-Control-Allow-Origin", "*");

        return this.http.post<loginUser>(`${environment.apiUrl}login`, params, { headers: this.headers})
        .pipe(map((tokens) => {
            user.access_token = tokens.access_token;
            user.refresh_token = tokens.refresh_token;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.appStateService.updateSessionInfo(user);
            return user;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.appStateService.updateSessionInfo(null!);
        this.currentUserSubject.next(null!);
    }
}

