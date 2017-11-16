import { Component, ChangeDetectorRef  } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'myProfile',
  providers: [UserService],
  templateUrl: './myprofile.component.html' 
})
export class MyProfileComponent  { 
    access_token: string;
    userData: any;
    username: string;
    user_description: string;
    user_work_position: string;
    user_address: string;
    userId: string;
    
    edit_username: string;
    edit_user_description: string;
    edit_user_work_position: string;
    edit_user_address: string;
    
    check_add_button: boolean;
    check_edit_profile_button: boolean;
    user_thumbnail: string;

    file: File;
    user_image_session: boolean;
    edit_name_error: boolean;
    edit_position_error: boolean;
    edit_description_error: boolean;
    edit_location_error: boolean;

    edit_name_msg: string;
    edit_position_msg: string;
    edit_description_msg: string;
    edit_location_msg: string;

    editProfileCheck: boolean;

    constructor(private _service: UserService, private route:ActivatedRoute, private changeDetector:ChangeDetectorRef) {
        route.params.subscribe(val => {
            this.userData = JSON.parse(localStorage.getItem("user"));
            let user_id = this.route.snapshot.params["id"];
            let access_token = JSON.parse(localStorage.getItem("access_token"));

            this._service.get_user_details(access_token, user_id).subscribe(
                data => {
                    let userDetailsData = data.response;
                    this.username = userDetailsData.user_name;
                    this.user_work_position = userDetailsData.work_position;
                    this.user_description = userDetailsData.description;
                    this.user_address = userDetailsData.address;
                    this.user_thumbnail = userDetailsData.user_thumbnail;

                    this.edit_username = userDetailsData.user_name;
                    this.edit_user_work_position = userDetailsData.work_position;
                    this.edit_user_description = userDetailsData.description;
                    this.edit_user_address = userDetailsData.address;
                    this.userId = user_id;
                    if ( access_token == userDetailsData.access_token ) {
                        this.check_add_button = false;
                        this.check_edit_profile_button = true;
                        this.user_image_session = true;
                    } else {
                        this.check_add_button = true;
                        this.check_edit_profile_button = false;
                        this.user_image_session = false;
                    }
                    // this.cdRef.detectChanges();
                },
                error => {
                    // console.log(error);
                }
            );
        });
    }

    ngOnInit() {
        // this.changeDetector.detectChanges();
    }

    editProfile () {
        this.editProfileCheck = true;
    }

    closeProfilePopup () {
        this.editProfileCheck = false;
    }

    onChangeUserImage(event: EventTarget) {
		let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
		let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
		let files: FileList = target.files;
		this.file = files[0];

		let access_token = JSON.parse(localStorage.getItem("access_token"));
        let formData = new FormData();
        formData.append("user_thumbnail", this.file);
        formData.append("access_token", access_token); 
        this._service.upload_user_thumbnail(formData).subscribe(
            data => {
                console.log(data);
                // console.log(data.response.user_thumbnail);
                this.user_thumbnail = data.response;
            },
            error => {
                console.log(error);
            }
        );
	}

    updateUserProfile() {

        let access_token = JSON.parse(localStorage.getItem("access_token"));

        if ( this.edit_username == '' || this.edit_username == undefined ) {
            this.edit_name_error = true;
            this.edit_name_msg = 'Please enter name';
            return false;
        }  else {
            this.edit_name_error = false;
        }

        this._service.update_profile(access_token, this.edit_username, this.edit_user_work_position, this.edit_user_description, this.edit_user_address).subscribe(
            data => {
                console.log(data);
                let userDetailsData = data.response;
                this.username = userDetailsData.user_name;
                this.user_work_position = userDetailsData.work_position;
                this.user_description = userDetailsData.description;
                this.user_address = userDetailsData.address;

                this.editProfileCheck = false;

                this.edit_username = userDetailsData.user_name;
                this.edit_user_work_position = userDetailsData.work_position;
                this.edit_user_description = userDetailsData.description;
                this.edit_user_address = userDetailsData.address;
                
            },
            error => {
                console.log(error);
            }
        );
    }

    addFriend(user_id: string) {
        console.log(user_id);
    }

}