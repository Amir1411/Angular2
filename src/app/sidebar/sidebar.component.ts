import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html' 
})
export class SidebarComponent  { 

  userItem:any;
	user_unique_id: string;

	constructor(){
    	this.userItem = JSON.parse(localStorage.getItem("user"));
      this.user_unique_id = this.userItem.user_id;
  	}
}