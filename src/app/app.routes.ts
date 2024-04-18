import { Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import BienvenidaComponent from './components/bienvenida/bienvenida.component';

export const routes: Routes = [
  {
    path: 'bienvenida', // ¿estoy en '/bienvenida'?
    loadComponent: () => import('./components/bienvenida/bienvenida.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'community',
    loadComponent: () =>
      import('./components/community/community.component').then(
        (m) => m.CommunityComponent
      ),
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
