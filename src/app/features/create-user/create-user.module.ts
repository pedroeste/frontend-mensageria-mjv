import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent
  }
];

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateUserModule { }
