import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';

export const AppRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', component: HomeComponent },
	{ path: 'add', component: AddPostComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);