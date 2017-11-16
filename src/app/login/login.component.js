"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_service, router) {
        this._service = _service;
        this.userItem = JSON.parse(localStorage.getItem("user"));
        this.access_token = JSON.parse(localStorage.getItem("access_token"));
        if (this.access_token != null) {
            router.navigate(['dashboard']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.emailRegex = "^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
        if (this.email == '' || this.email == undefined) {
            this.showEmailError = true;
            this.login_email_msg = 'Please enter email';
            return false;
        }
        else if (!this.email.match(this.emailRegex)) {
            var regex = new RegExp("^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$");
            this.login_email_msg = "Please enter the valid email address.";
            this.showEmailError = true;
            return false;
        }
        else {
            this.showEmailError = false;
        }
        if (this.password == '' || this.password == undefined) {
            this.showPasswordError = true;
            this.login_password_msg = 'Please enter password';
            return false;
        }
        else {
            this.showPasswordError = false;
        }
        this._service.login(this.email, this.password).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                _this.showLoginError = false;
                localStorage.setItem('user', JSON.stringify(data.response));
                localStorage.setItem('access_token', JSON.stringify(data.response.access_token));
                window.location.replace('/dashboard');
            }
            else {
                _this.showLoginError = true;
                _this.login_error_msg = data.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this.emailRegex = "^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
        if (this.signupname == '' || this.signupname == undefined) {
            this.showSignupNameError = true;
            this.signup_name_msg = 'Please enter name';
            return false;
        }
        else {
            this.showSignupNameError = false;
        }
        if (this.signupemail == '' || this.signupemail == undefined) {
            this.showSignupEmailError = true;
            this.signup_email_msg = 'Please enter email';
            return false;
        }
        else if (!this.signupemail.match(this.emailRegex)) {
            var regex = new RegExp("^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$");
            this.signup_email_msg = "Please enter the valid email address.";
            this.showSignupEmailError = true;
            return false;
        }
        else {
            this.showSignupEmailError = false;
        }
        if (this.signuppassword == '' || this.signuppassword == undefined) {
            this.showSignupPasswordError = true;
            this.signup_password_msg = 'Please enter password';
            return false;
        }
        else {
            this.showSignupPasswordError = false;
        }
        this._service.signup(this.signupname, this.signupemail, this.signuppassword).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                _this.showSignupError = false;
                localStorage.setItem('user', JSON.stringify(data.response));
                localStorage.setItem('access_token', JSON.stringify(data.response.access_token));
                window.location.replace('/dashboard');
            }
            else {
                _this.showSignupError = true;
                _this.login_error_msg = data.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        providers: [user_service_1.UserService],
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map