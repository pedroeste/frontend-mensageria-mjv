import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularEditorModule } from '@kolkov/angular-editor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const components = [
  AppComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    //AngularEditorModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  //providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
