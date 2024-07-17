import { Routes } from '@angular/router';
import path from 'path';
<<<<<<< HEAD
import { RegisterComponent } from './shared/components/register/register.component';
=======
import { Component } from '@angular/core';
import { LoginComponent } from './business/login/login.component';
import DashboardComponent from './business/dashboard/dashboard.component';
import ProfileComponent from './business/profile/profile.component';
import TablesComponent from './business/records/records.component';
import LayoutComponent from './shared/components/layout/layout.component';
import { LandingpageComponent } from './business/landing-page/landing-page.component';
>>>>>>> 07a08a73c952fca28943c8b591842b8e2a926a92

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing-page',
    component: LandingpageComponent
  },
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
    ],
  },
  /*
  {
    path: '**',
    redirectTo: 'dashboard',
  },  */
  {
    path: 'register',
    component: RegisterComponent
  }
  
];


