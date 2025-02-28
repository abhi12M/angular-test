import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('userName')) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
