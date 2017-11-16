import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './myprofile/myprofile.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'profile/:id',
    component: MyProfileComponent,
    data: {
      title: 'My Profile'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
