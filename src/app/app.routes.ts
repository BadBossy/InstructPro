import { Routes } from '@angular/router';
import { ManualRendererComponent } from './features/manual/manual-renderer/manual-renderer.component';
import { ManualCreatorComponent } from './features/manual/creator/creator.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manual',
    children: [
      {
        path: ':id',
        component: ManualRendererComponent,
      },
    ],
  },
  {
    path: 'creator',
    component: ManualCreatorComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
