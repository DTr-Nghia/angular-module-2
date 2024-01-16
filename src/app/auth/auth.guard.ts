import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(AuthService).isAuthenticated();
  if (!isLoggedIn) {
    inject(AuthService).canAccess();
  }
  return isLoggedIn;
};