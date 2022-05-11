import {HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashShopApiService } from './dash-shop-api.service';
import { ShowProductsComponent } from './show-products/show-products.component';
import { AddEditProductsComponent } from './add-edit-products/add-edit-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    AddEditProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DashShopApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
