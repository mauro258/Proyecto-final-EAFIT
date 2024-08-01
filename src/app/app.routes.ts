import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './shared/components/register/register.component';
import { Component } from '@angular/core';
import { LoginComponent } from './business/login/login.component';
import DashboardComponent from './business/dashboard/dashboard.component';
import ProfileComponent from './business/profile/profile.component';
import TablesComponent from './business/records/records.component';
import LayoutComponent from './shared/components/layout/layout.component';
import { LandingpageComponent } from './business/landing-page/landing-page.component';
import { ClientPortalComponent } from './business/client/client-portal/client-portal.component';
import { ClientFormComponent } from './business/client/client-form/client-form.component';


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
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'client-portal',
    component: ClientPortalComponent
  },
  {
    path: 'client-form',
    component: ClientFormComponent,
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
  
  {
    path: '**',
    redirectTo: 'dashboard',
  },  
 
  
];


