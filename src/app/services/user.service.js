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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:3001/';
    }
    UserService.prototype.login = function (user_email, user_password) {
        return this.http.post(this.usersUrl + 'login', { user_email: user_email, user_password: user_password })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.signup = function (user_name, user_email, user_password) {
        return this.http.post(this.usersUrl + 'userCreate', { user_name: user_name, user_email: user_email, user_password: user_password })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.get_user_list = function (access_token) {
        return this.http.post(this.usersUrl + 'get_user_list', { access_token: access_token })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map