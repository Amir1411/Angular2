import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { LoginComponent }  from './login/login.component';
import { AboutComponent }  from './about/about.component';
import { SidebarComponent }  from './sidebar/sidebar.component';
import { AsideComponent }  from './aside/aside.component';
import { UserListComponent } from './userlist/userlist.component';

import { AppRoutingModule } from './app.routing';
import {DataTableModule} from "angular2-datatable";
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpModule ,
    MomentModule,
    DataTableModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    LoginComponent, 
    AboutComponent,
    SidebarComponent,
    AsideComponent,
    UserListComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
