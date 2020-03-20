import { NgModule } from '@angular/core';
import { MaintenanceComponent } from './maintenance.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent
  }
]

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaintenanceModule { }
