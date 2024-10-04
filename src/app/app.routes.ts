import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AuthComponent } from './auth/auth.component';
import { CanActivateGuard } from './auth/can-activate.guard';
import { UserComponent } from './user/user.component';
import { SkillComponent } from './skill/skill.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'skill',
    component: SkillComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: '**', 
    // canActivate: [CanActivateGuard, MsalGuard],
    component: AuthComponent
  }
];
