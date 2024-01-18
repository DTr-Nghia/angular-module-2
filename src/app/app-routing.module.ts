import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './auth/users/users.component';

const routes: Routes = [{ path: 'login', title: 'Login', component: LoginComponent }, { path: '', title: 'Home', component: HomeComponent, canActivate: [authGuard] }, { path: 'users', title: 'users', component: UsersComponent, canActivate: [authGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }