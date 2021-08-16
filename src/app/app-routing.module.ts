import { AdminComponent } from './admin/admin.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : '' , redirectTo : 'AdminComponent' , pathMatch : 'full'},
  {path : 'AdminComponent' , component : AdminComponent},
  {path : 'danhMucSanPham' , component : ProductCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
