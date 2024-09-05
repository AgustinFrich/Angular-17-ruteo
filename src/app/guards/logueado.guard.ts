import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth, authState } from '@angular/fire/auth';
import { map } from 'rxjs';

export const logueadoGuard: CanActivateFn = async (route, state) => {
  const authS = inject(AuthService);
  const router = inject(Router);

  await authS.estaLogueado();

  console.log(authS.logueado);

  if (authS.logueado == null) {
    router.navigateByUrl('/login');
  }

  return authS.logueado != null;
};
