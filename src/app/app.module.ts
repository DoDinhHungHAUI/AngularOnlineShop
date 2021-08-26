import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryService } from './service/productCategory.service';
import { AddEditProductCategoryComponent } from './admin/product-category/add-edit-product-category/add-edit-product-category.component';

import { CKEditorModule } from 'ckeditor4-angular';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NgxPaginationModule } from 'ngx-pagination';
import { CustomERProductCategoryComponent } from './customError/custom-erproduct-category/custom-erproduct-category.component';
import { ProductComponent } from './admin/product/product.component';
import { AddEditProductComponent } from './admin/product/add-edit-product/add-edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductCategoryComponent,
    AddEditProductCategoryComponent,
    CustomERProductCategoryComponent,
    ProductComponent,
    AddEditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CKEditorModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
