import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./features/transfer/transfer.module').then(m => m.TransferModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./features/create-user/create-user.module').then(m => m.CreateUserModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./features/maintenance/maintenance.module').then(m => m.MaintenanceModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/main-menu/main-menu.module').then(m => m.MainMenuModule)
  },
  {
    path: 'feature-registration',
    loadChildren: () => import('./features/feature-registration/feature-registration.module').then(m => m.FeatureRegistrationModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./features/main-menu/main-menu.module').then(m => m.MainMenuModule)
  },
  {
    path: 'content-manager',
    loadChildren: () => import('./features/content-manager/content-manager.module').then(m => m.ContentManagerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
