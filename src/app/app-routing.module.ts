import { AdminComponent } from './admin/admin.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './admin/product/product.component';

const routes: Routes = [

  {path : '' , redirectTo : 'AdminComponent' , pathMatch : 'full'},
  {path : 'AdminComponent' , component : AdminComponent},
  {path : 'danhMucSanPham' , component : ProductCategoryComponent},
  {path : 'danhSachSanPham' , component : ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
