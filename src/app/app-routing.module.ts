import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./auth/login/login.component').then((t) => t.LoginComponent),
  },
  {
    path: 'users',
    title: 'users',
    loadComponent: () =>
      import('./auth/users/users.component').then((t) => t.UsersComponent),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
