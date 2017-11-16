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
import { MyProfileComponent } from './myprofile/myprofile.component';

import { AppRoutingModule } from './app.routing';
import { MomentModule } from 'angular2-moment';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpModule ,
    NguiAutoCompleteModule,
    MomentModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    LoginComponent, 
    AboutComponent,
    SidebarComponent,
    AsideComponent,
    MyProfileComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
