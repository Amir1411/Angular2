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
var platform_browser_1 = require("@angular/platform-browser");
var post_service_1 = require("../services/post/post.service");
var HomeComponent = (function () {
    function HomeComponent(sanitizer, _service) {
        this.sanitizer = sanitizer;
        this._service = _service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var access_token = JSON.parse(localStorage.getItem("access_token"));
        this._service.get_post(access_token).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                var postData = data.response;
                // for( let i=0; i<data.length; i++ ) {
                // 	postData[i].post_image = this.sanitizer.bypassSecurityTrustStyle(`postData[i].post_image`);
                // }
                if (postData.length > 0) {
                    _this.noPostFound = false;
                    _this.postArray = postData;
                }
                else {
                    _this.noPostFound = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.onChangePostImage = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        console.log(this.file);
        this.img_preivew = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.file));
        this.image_preview_show = true;
        this.is_image = true;
        this.post_hid_img = this.file;
    };
    HomeComponent.prototype.closeCreatePostImage = function () {
        this.is_image = false;
        this.img_preivew = "";
        this.image_preview_show = false;
    };
    HomeComponent.prototype.createPost = function () {
        var _this = this;
        var access_token = JSON.parse(localStorage.getItem("access_token"));
        var userData = JSON.parse(localStorage.getItem("user"));
        if (this.postCaption == undefined) {
            this.postCaption = '';
        }
        if (this.postCaption != '' || this.is_image == true) {
            console.log(this.post_hid_img);
            var formData = new FormData();
            formData.append("post_caption", this.postCaption);
            formData.append("post_image", this.post_hid_img);
            formData.append("access_token", access_token);
            this._service.create_post(formData).subscribe(function (data) {
                console.log(data);
                _this.ngOnInit();
                _this.closeCreatePostImage();
                _this.postCaption = '';
                _this.post_hid_img = '';
                _this.is_image = false;
                _this.createPostDiv = true;
                setTimeout(function () {
                    _this.createPostDiv = false;
                }, 3000);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            return false;
        }
    };
    // user_access_token: string;
    HomeComponent.prototype.setLikePost = function ($event, $post_details, $user_access_token) {
        // console.log($post_details.post_id);
        // console.log($post_details.is_liked_by_me);
        // console.log($user_access_token);
        console.log($event);
        var access_token = JSON.parse(localStorage.getItem("access_token"));
        // console.log("access_token"+access_token);
        if (access_token == $user_access_token) {
            this._service.post_like(access_token, $post_details.post_id, $post_details.is_liked_by_me).subscribe(function (data) {
                console.log(data);
                if (data.status == 200) {
                    $post_details.is_liked_by_me = data.response.is_liked_by_me;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            $post_details.is_liked_by_me = 0;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        providers: [post_service_1.PostService],
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, post_service_1.PostService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map