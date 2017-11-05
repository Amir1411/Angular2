import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  template: `
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button> 
					<a href="#" class="navbar-brand">Lapar</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
					<ul class="nav navbar-nav pull-right" *ngIf="logoutSession">
						<li [routerLinkActive]="['active']"><a [routerLink]="['/dashboard']">Dashboard</a></li>
						<li><a href="javascript:void(0)" (click)="logout()">Logout</a></li>
					</ul> 
				</div> 
			</div> 
		</nav>
		<div *ngIf="logoutSession">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-3 col-md-2 sidebar">
						<sidebar></sidebar>
					</div>
					<div class="col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 main">
						<router-outlet></router-outlet>
					</div>
					<div class="col-sm-3 col-md-2 aside">
						<aside></aside>
					</div>
				</div>
			</div>
		</div>
		<div *ngIf="loginSession">
			<router-outlet></router-outlet>
		</div>`,
})
export class AppComponent  { 

	userItem:string;
	access_token: string;
	loginSession: boolean;
	logoutSession: boolean;

	constructor(router: Router){
    	this.userItem = JSON.parse(localStorage.getItem("user"));
		this.access_token = JSON.parse(localStorage.getItem("access_token"));
		if(this.access_token != null) {
			// router.navigate(['dashboard']);
			this.logoutSession = true;
		} else {
			this.loginSession = true;
		}
  	}

	logout() {
		localStorage.removeItem("user");
		localStorage.removeItem("access_token");
		window.location.replace('');
	}
}
