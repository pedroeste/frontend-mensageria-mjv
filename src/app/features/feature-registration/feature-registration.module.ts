import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FeatureRegistrationComponent } from './feature-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FeatureRegistrationComponent
  }
]

@NgModule({
  declarations: [FeatureRegistrationComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeatureRegistrationModule { }
