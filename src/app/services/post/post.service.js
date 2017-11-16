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
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3001/';
    }
    PostService.prototype.create_post = function (formData) {
        return this.http.post(this.baseUrl + 'create_post', formData).map(function (res) { return res.json(); });
    };
    PostService.prototype.get_post = function (access_token) {
        return this.http.post(this.baseUrl + 'get_post', { access_token: access_token }).map(function (res) { return res.json(); });
    };
    PostService.prototype.post_like = function (access_token, post_id, is_liked_by_me) {
        var params = {
            access_token: access_token,
            post_id: post_id,
            is_liked_by_me: is_liked_by_me
        };
        return this.http.post(this.baseUrl + 'post_like', params).map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map