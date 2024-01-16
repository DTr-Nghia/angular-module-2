import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from './shared/models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router, private http: HttpClient) { }

    isAuthenticated(): boolean {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        return false;
    }
    private generateRandomUser() {
        var user = {
            id: Math.floor(Math.random() * 1000000),
            username: Math.random().toString(36).substring(7),
            email: Math.random().toString(36).substring(7) + '@example.com',
            role: 'admin'
        };

        return user;
    }
    canAccess() {
        if (!this.isAuthenticated()) {
            //redirect to login
            this.router.navigate(['/login']);
            localStorage.setItem('redirectUrl', this.router.url);
        }
    }
    canAuthenticate() {
        if (this.isAuthenticated()) {
            //redirect to dashboard
            const redirectUrl = localStorage.getItem('redirectUrl')
            if (redirectUrl) {
                this.router.navigate([redirectUrl]);
            } else {
                this.router.navigate(['/']);
            }
        }
    }

    storeToken(token: string) {
        localStorage.setItem('token', token);
    }
    storeInfo(user: User) {
        localStorage.setItem('userInfo', JSON.stringify(user))
    }
    login(username: string, password: string): Observable<any> {
        const randomToken = Math.floor(Math.random() * 1000000)
        const accessUser = { id: randomToken, username: username, email: `${username}@gmail.com`, role: "admin" }
        return of({ token: randomToken, message: "Login Success" })
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('redirectUrl');
        this.router.navigate(['/login']);
    }
}