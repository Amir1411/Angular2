import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
    constructor(private http: Http) { }

    private baseUrl = 'http://localhost:3001/';

    create_post(formData: any) {
        return this.http.post(this.baseUrl+'create_post', formData).map(res => res.json());
    }
    get_post(access_token: string){
        return this.http.post(this.baseUrl+'get_post', {access_token: access_token}).map(res => res.json());
    }
    post_like(access_token: string, post_id: string, is_liked_by_me: string){
        let params = {
            access_token: access_token, 
            post_id: post_id,
            is_liked_by_me: is_liked_by_me
        };
        return this.http.post(this.baseUrl+'post_like', params).map(res => res.json());
    }
}