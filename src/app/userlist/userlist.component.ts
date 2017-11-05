import { Component } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'userlist',
  providers: [UserService],
  templateUrl: './userlist.component.html' 
})
export class UserListComponent  { 
    access_token: string;
    userListData: any;
    constructor(private _service: UserService) {}

    ngOnInit() {
        this.access_token = JSON.parse(localStorage.getItem("access_token"));
        this._service.get_user_list(this.access_token).subscribe(
            data => {
                console.log(data.response);
                this.userListData = data.response;
            },
            error => {
                console.log(error);
            }
        );
    }
}