import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  providers: [UserService],
  templateUrl: './login.component.html'
})
export class LoginComponent  { 

    // For login
    email:string;
    password:string;
    showEmailError: boolean;
    login_email_msg: string;
    showPasswordError: boolean;
    login_password_msg: string;
    emailRegex: string;
    showLoginError: boolean;
    login_error_msg: string;
    userItem: string;
    access_token: string;

    // For signup
    signupname:string;
    signupemail:string;
    signuppassword:string;
    showSignupNameError: boolean;
    signup_name_msg: string;
    showSignupEmailError: boolean;
    signup_login_msg: string;
    signup_email_msg: string;
    showSignupPasswordError: boolean;
    signup_password_msg: string;
    showSignupError: boolean;
    signup_error_msg: string;

    constructor(private _service:UserService, router: Router) {
        this.userItem = JSON.parse(localStorage.getItem("user"));
		this.access_token = JSON.parse(localStorage.getItem("access_token"));
		if(this.access_token != null) {
			router.navigate(['dashboard']);
            // window.location.replace('/dashboard');
		}
    }

	login() {
        this.emailRegex = "^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";

        if ( this.email == '' || this.email == undefined ) {
            this.showEmailError = true;
            this.login_email_msg = 'Please enter email';
            return false;
        } else if (!this.email.match(this.emailRegex)) {
            var regex = new RegExp("^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$");
            this.login_email_msg = "Please enter the valid email address.";
            this.showEmailError = true;
            return false;
        } else {
            this.showEmailError = false;
        }

        if ( this.password == '' || this.password == undefined ) {
            this.showPasswordError = true;
            this.login_password_msg = 'Please enter password';
            return false;
        } else {
            this.showPasswordError = false;
        }

        this._service.login(this.email, this.password).subscribe(
            data => {
                console.log(data);
                if (data.status == 200) {
                    this.showLoginError = false;
                    localStorage.setItem('user', JSON.stringify(data.response));
                    localStorage.setItem('access_token', JSON.stringify(data.response.access_token));
                    window.location.replace('/dashboard');
                } else {
                    this.showLoginError = true;
                    this.login_error_msg = data.message;
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    signup() {
        this.emailRegex = "^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";

        if ( this.signupname == '' || this.signupname == undefined ) {
            this.showSignupNameError = true;
            this.signup_name_msg = 'Please enter name';
            return false;
        } else {
            this.showSignupNameError = false;
        }

        if ( this.signupemail == '' || this.signupemail == undefined ) {
            this.showSignupEmailError = true;
            this.signup_email_msg = 'Please enter email';
            return false;
        } else if (!this.signupemail.match(this.emailRegex)) {
            var regex = new RegExp("^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$");
            this.signup_email_msg = "Please enter the valid email address.";
            this.showSignupEmailError = true;
            return false;
        } else {
            this.showSignupEmailError = false;
        }

        if ( this.signuppassword == '' || this.signuppassword == undefined ) {
            this.showSignupPasswordError = true;
            this.signup_password_msg = 'Please enter password';
            return false;
        } else {
            this.showSignupPasswordError = false;
        }

        this._service.signup(this.signupname, this.signupemail, this.signuppassword).subscribe(
            data => {
                console.log(data);
                if (data.status == 200) {
                    this.showSignupError = false;
                    localStorage.setItem('user', JSON.stringify(data.response));
                    localStorage.setItem('access_token', JSON.stringify(data.response.access_token));
                    window.location.replace('/dashboard');
                } else {
                    this.showSignupError = true;
                    this.login_error_msg = data.message;
                }
            },
            error => {
                console.log(error);
            }
        );
    }
}
