import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from './services/user.service';

@Component({
  selector: 'my-app',
  providers: [UserService],
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
						<li>
							<input type="text" name="search" placeholder="Enter something..." class="form-control search-input-field" (keydown)="searchUser($event)" ngDefaultControl>
							<div class="search-user-list-wrap" *ngIf="searchSuggestion">
								<ul class="" *ngFor="let list of searchUserList">
									<li class="active">
										<div class="clearfix">
											<div class="pull-left">
												<div class="clearfix">
													<img [src]="list.user_thumbnail" class="img-circle" />
													<a [routerLink]="['/profile/', list.user_id]" class="clearfix">
														<p>{{list.user_name}}</p>
													</a>
												</div>
											</div>
											<div class="pull-right">
												<button class="" *ngIf="list.is_friend == 0">Add Friend</button>
												<button class="searchFriendListBtn" *ngIf="list.is_friend == 1">Friend</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li [routerLinkActive]="['active']"><a [routerLink]="['/profile/', user_unique_id]">My Profile</a></li>
						<li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/dashboard']">Dashboard</a></li>
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

	userItem:any;
	access_token: string;
	loginSession: boolean;
	logoutSession: boolean;
	user_unique_id: string;
	searchSuggestion: boolean;
	searchUserList: any;
	searchNoUserList: boolean;

	constructor(private route:ActivatedRoute, router: Router, private _service: UserService){
    	this.userItem = JSON.parse(localStorage.getItem("user"));
		this.access_token = JSON.parse(localStorage.getItem("access_token"));
		if(this.access_token != null) {
			// router.navigate(['dashboard']);
			this.logoutSession = true;
			this.user_unique_id = this.userItem.user_id;
		} else {
			this.loginSession = true;
		}
  	}

	logout() {
		localStorage.removeItem("user");
		localStorage.removeItem("access_token");
		window.location.replace('');
	}

	searchUser(event: any) {
		let searchValue = event.target.value;
		let access_token = JSON.parse(localStorage.getItem("access_token"));
		if (searchValue != "" || searchValue != undefined) {
			this._service.search_user(access_token, searchValue).subscribe(
				data => {
					console.log(data.reponse);
					this.searchSuggestion = true;
					this.searchUserList = data.response;
					
				},
				error => {
					this.searchSuggestion = false;
					console.log(error);
				}
			);
		} else {
			this.searchSuggestion = false;
		}
	}
}
