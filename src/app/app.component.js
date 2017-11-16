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
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.userItem = JSON.parse(localStorage.getItem("user"));
        this.access_token = JSON.parse(localStorage.getItem("access_token"));
        if (this.access_token != null) {
            // router.navigate(['dashboard']);
            this.logoutSession = true;
        }
        else {
            this.loginSession = true;
        }
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        window.location.replace('');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<button type=\"button\" class=\"collapsed navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-6\" aria-expanded=\"false\">\n\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button> \n\t\t\t\t\t<a href=\"#\" class=\"navbar-brand\">Lapar</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\">\n\t\t\t\t\t<ul class=\"nav navbar-nav pull-right\" *ngIf=\"logoutSession\">\n\t\t\t\t\t\t<li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" (click)=\"logout()\">Logout</a></li>\n\t\t\t\t\t</ul> \n\t\t\t\t</div> \n\t\t\t</div> \n\t\t</nav>\n\t\t<div *ngIf=\"logoutSession\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3 col-md-2 sidebar\">\n\t\t\t\t\t\t<sidebar></sidebar>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 main\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 col-md-2 aside\">\n\t\t\t\t\t\t<aside></aside>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"loginSession\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map