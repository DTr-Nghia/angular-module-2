import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { AddUser, User } from './shared/models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    listUser: User[];
    constructor() {
        this.listUser = JSON.parse(localStorage.getItem('userList') || '[]');
    }
    createUser(data: AddUser): Observable<{ message: string }> {
        const randomToken = Math.floor(Math.random() * 1000000)
        const userList: User[] = JSON.parse(localStorage.getItem("userList") as string) || [];
        const existUser = userList.find(user => user.id === randomToken)
        if (existUser) {
            return of({ message: "Create Failed! User has been existed" })
        } else {
            const accessUser = { id: randomToken, username: data.username, email: data.email, password: data.password, role: "admin" }
            const newUserList = [...userList, accessUser]
            localStorage.setItem('userList', JSON.stringify(newUserList));
            return of({ message: "Create Success!!" })
        }
    }
    editUser(id: number, data: AddUser): Observable<{ message: string }> {
        const userList: User[] = JSON.parse(localStorage.getItem("userList") as string) || [];
        const updateUser = userList.map(user => {
            if (user.id === id) {
                return {
                    ...user,
                    ...data
                }
            } else {
                return user
            }
        })
        localStorage.setItem('userList', JSON.stringify(updateUser));
        return of({ message: "Edit Success!!" })
    }
    deleteUser(id: number): Observable<any> {
        const newList = this.listUser.filter((item: User) => item.id !== id)
        localStorage.setItem('userList', JSON.stringify(newList))
        return of({})
    }
}