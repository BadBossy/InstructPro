import { Routes } from '@angular/router';
import { ManualRendererComponent } from './features/manual/manual-renderer/manual-renderer.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WelcomeComponent } from './core/welcome/welcome.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'manual/:id',
    component: ManualRendererComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
