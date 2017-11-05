import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private usersUrl = 'http://localhost:3001/';

    login(user_email: string, user_password: string) {
        return this.http.post(this.usersUrl+'login', { user_email: user_email, user_password: user_password })
            .map(res => res.json());
    }

    signup(user_name: string, user_email: string, user_password: string) {
        return this.http.post(this.usersUrl+'userCreate', { user_name: user_name, user_email: user_email, user_password: user_password })
            .map(res => res.json());
    }

    get_user_list(access_token: string) {
        return this.http.post(this.usersUrl+'get_user_list', { access_token: access_token })
            .map(res => res.json());
    }
    
}