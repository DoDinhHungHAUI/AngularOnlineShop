import { RevenueChartComponent } from './Component/admin/revenue-chart/revenue-chart.component';
import { AppGroupComponent } from './Component/app-group/app-group.component';
import { AppRoleComponent } from './Component/app-role/app-role.component';
import { AppUserComponent } from './Component/app-user/app-user.component';
import { HomeComponent } from './Component/home/home.component';
import { SignInComponent } from './Component/Account/sign-in/sign-in.component';
import { SingUpComponent } from './Component/Account/sing-up/sing-up.component';
import { UserComponent } from './Component/Account/user/user.component';
import { Routes } from "@angular/router";
import { AdminComponent } from "./Component/admin/admin.component";
import { ProductCategoryComponent } from "./Component/admin/product-category/product-category.component";
import { ProductComponent } from "./Component/admin/product/product.component";

export const appRoutes: Routes = [

  //{path : '' , redirectTo : 'AdminComponent' , pathMatch : 'full'},
  {path : 'AdminComponent' , component : AdminComponent,
    children :[
                {path : 'danhMucSanPham' , component : ProductCategoryComponent},
                {path : 'danhSachSanPham' , component : ProductComponent},
                {path : 'nguoidung' , component : AppUserComponent},
                {path : 'quyen' , component : AppRoleComponent},
                {path : 'nhomNguoiDung' , component : AppGroupComponent},
                {path : 'Thongkedoanhthu' , component : RevenueChartComponent}
              ]
  },
  // {path : 'danhMucSanPham' , component : ProductCategoryComponent},
  // {path : 'danhSachSanPham' , component : ProductComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SingUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  {path : 'home' , component : HomeComponent},
  { path : '', redirectTo:'/login', pathMatch : 'full'}

];
