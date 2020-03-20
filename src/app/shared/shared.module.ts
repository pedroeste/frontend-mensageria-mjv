import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ServiceUploadComponent } from './service-upload/service-upload.component';
import { AvailableServicesComponent } from './available-services/available-services.component';

const modules = [
  MatButtonModule,
  MatTabsModule,
  MatCheckboxModule,
  FontAwesomeModule
];

const components = [AdminMenuComponent, ServiceUploadComponent, AvailableServicesComponent];

const pipes = [];

@NgModule({
  declarations: [AdminMenuComponent, ServiceUploadComponent, ServiceUploadComponent, AvailableServicesComponent],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...pipes,
    ...components
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
