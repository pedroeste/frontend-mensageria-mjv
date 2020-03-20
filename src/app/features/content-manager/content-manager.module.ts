import { CreateEmailTemplateComponent } from './create-email-template/create-email-template.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateTextTemplateComponent } from './create-text-template/create-text-template.component';
import { NgModule } from '@angular/core';
import { ContentManagerComponent } from './content-manager/content-manager.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditTemplateDialogComponent } from './edit-template-dialog/edit-template-dialog.component';
import { DeleteTemplateDialogComponent } from './delete-template-dialog/delete-template-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ContentManagerComponent
  },
  {
    path: 'create-text-template',
    component: CreateTextTemplateComponent
  },
  {
    path: 'create-email-template',
    component: CreateEmailTemplateComponent
  },
]

@NgModule({
  declarations: [
    ContentManagerComponent,
    CreateTextTemplateComponent,
    CreateEmailTemplateComponent,
    EditTemplateDialogComponent,
    DeleteTemplateDialogComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }

  ]
})
export class ContentManagerModule { }
