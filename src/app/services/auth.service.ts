import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from './models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    users = [{ id: 1, username: 'Peter', email: "peter@mail.com", password: '123' }, { id: 2, username: 'David', email: "david@mail.com", password: '456' }]
    constructor(private router: Router, private http: HttpClient) { }

    isAuthenticated(): boolean {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        return false;
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
                this.router.navigate(['/dashboard']);
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
        // fake authentication
        const userFound = this.users.find((user) => user.username === username && user.password === password)
        if (userFound) {
            return of({ token: "abc9293jjdad23144123", message: "Login Success", this: { id: userFound.id, username: userFound.username, email: userFound.email } })
        } else {
            return throwError('Đăng nhập thất bại! Vui lòng thử lại');
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('redirectUrl');
        this.router.navigate(['/login']);
    }
}