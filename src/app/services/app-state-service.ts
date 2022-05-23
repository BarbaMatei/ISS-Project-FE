import { Injectable } from "@angular/core";
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from "rxjs";
import { loginUser } from "../models/loginUser";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    private readonly sessionInfo$: BehaviorSubject<loginUser | null> = new BehaviorSubject<loginUser | null>(<loginUser><unknown>localStorage.getItem('currentUser'));

    observerSessionInfo(): BehaviorSubject<loginUser | null> {
        return this.sessionInfo$;
    }

    getAccessToken(): string{
        return JSON.parse(localStorage.getItem('currentUser')!).refresh_token;
    }

    getDecodedAccessToken(token: string): any {
        try {
            console.log(jwt_decode(token));
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    updateSessionInfo(session: loginUser) {
        this.sessionInfo$.next(session);
    }

    getCurrentUserId(): number {
        const token = JSON.parse(localStorage.getItem('currentUser')!).access_token;
        return this.getDecodedAccessToken(token).UserID; // decode token and get userId
    }

    getCurrentUserRole(): string {
        const token = JSON.parse(localStorage.getItem('currentUser')!).access_token;
        return this.getDecodedAccessToken(token).role[0]; // decode token and get userId
    }
}