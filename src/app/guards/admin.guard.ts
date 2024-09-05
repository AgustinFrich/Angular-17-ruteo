import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // community/:rol
  const rol = route.params['rol'];
  console.log(route);

  console.log(rol);

  if (rol === 'admin') {
    return true;
  }

  return false;
};
