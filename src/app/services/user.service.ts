import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private usersUrl = 'http://13.126.140.186:3001/';

    login(user_email: string, user_password: string) {
        return this.http.post(this.usersUrl+'login', { user_email: user_email, user_password: user_password })
            .map(res => res.json());
    }

    signup(user_name: string, user_email: string, user_password: string) {
        return this.http.post(this.usersUrl+'userCreate', { user_name: user_name, user_email: user_email, user_password: user_password })
            .map(res => res.json());
    }

    get_user_details(access_token: string, user_id: string) {
        return this.http.post(this.usersUrl+'get_user_details', { access_token: access_token, user_id: user_id })
            .map(res => res.json());
    }

    upload_user_thumbnail(formData: any) {
        return this.http.post(this.usersUrl+'upload_user_thumbnail', formData).map(res => res.json());
    }

    update_profile(access_token: string, user_name: string, work_position: string, user_description: string, user_address: string) {
        let params = {
            access_token: access_token,
            user_name: user_name,
            work_position: work_position,
            user_description: user_description,
            user_address: user_address
        }
        return this.http.post(this.usersUrl+'update_profile', params).map(res => res.json());
    }

    search_user(access_token: string, search_value: string) {
        let params = {
            access_token: access_token,
            search_value: search_value
        }
        return this.http.post(this.usersUrl+'search_user', params).map(res => res.json());
    }
    
}