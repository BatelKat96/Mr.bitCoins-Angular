import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';


const USERS = [
    {
        _id: '101D',
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
];

@Injectable({
    providedIn: 'root'
})
export class UserService {

    //mock the server
    // private _usersDb: User[] = USERS;


    private _users$ = new BehaviorSubject<User[]>([]);
    public users$ = this._users$.asObservable()

    // public getUser() {
    //     return this._usersDb
    // }
    public getUser() {
        return USERS[0]
    }
}