"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var aside_component_1 = require("./aside/aside.component");
var userlist_component_1 = require("./userlist/userlist.component");
var app_routing_1 = require("./app.routing");
var angular2_datatable_1 = require("angular2-datatable");
var angular2_moment_1 = require("angular2-moment");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_moment_1.MomentModule,
            angular2_datatable_1.DataTableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            about_component_1.AboutComponent,
            sidebar_component_1.SidebarComponent,
            aside_component_1.AsideComponent,
            userlist_component_1.UserListComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map