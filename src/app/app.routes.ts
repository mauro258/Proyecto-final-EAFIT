import { Routes } from '@angular/router';
import path from 'path';
import { Component } from '@angular/core';
import { LoginComponent } from './business/login/login.component';
import DashboardComponent from './business/dashboard/dashboard.component';
import ProfileComponent from './business/profile/profile.component';
import TablesComponent from './business/tables/tables.component';
import { LandingPagueComponent } from './business/landing-pague/landing-pague.component';
import LayoutComponent from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing-pague',
    component: LandingPagueComponent
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
