import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'strategy',
    loadComponent: () =>
      import('./pages/strategy/strategy.component').then(
        (m) => m.StrategyComponent
      ),
  },
  {
    path: 'design',
    loadComponent: () =>
      import('./pages/design/design.component').then((m) => m.DesignComponent),
  },
  {
    path: 'engineering',
    loadComponent: () =>
      import('./pages/engineering/engineering.component').then(
        (m) => m.EngineeringComponent
      ),
  },
  {
    path: 'cloud',
    loadComponent: () =>
      import('./pages/cloud/cloud.component').then((m) => m.CloudComponent),
  },
  {
    path: 'hackathon',
    loadComponent: () =>
      import('./pages/hackathon/hackathon.component').then(
        (m) => m.HackathonComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
