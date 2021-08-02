import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoresComponent } from './stores/stores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStoreDialogComponent } from './add-store-dialog/add-store-dialog.component';
import { EditStoreDialogComponent } from './edit-store-dialog/edit-store-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoresComponent,
    AddStoreDialogComponent,
    EditStoreDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
