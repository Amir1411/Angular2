"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Layouts
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var userlist_component_1 = require("./userlist/userlist.component");
exports.routes = [
    {
        path: '',
        component: login_component_1.LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'dashboard',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        data: {
            title: 'About'
        }
    },
    {
        path: 'userlist',
        component: userlist_component_1.UserListComponent,
        data: {
            title: 'User List'
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map