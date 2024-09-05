import { Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: 'bienvenida', // ¿estoy en '/bienvenida'?
    loadComponent: () => import('./components/bienvenida/bienvenida.component'),
  },
  {
    path: 'login',
    children: [],
    loadComponent: () => import('./components/login/login.component'),
    ...canActivate(() => redirectLoggedInTo(['/bienvenida'])),
  },
  {
    path: 'community',
    loadComponent: () =>
      import('./components/community/community.component').then(
        (m) => m.CommunityComponent
      ),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: '',
    loadComponent: () => import('./components/bienvenida/bienvenida.component'),
  },
  {
    path: 'bienvenido',
    redirectTo: 'bienvenida',
  },
  {
    path: '**', // ¿estoy en 'CUALQUIER RUTA'?
    component: ErrorComponent,
  },
];
