import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { ProductListAdminComponent } from './pages/admin/product-list-admin/product-list-admin.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListAdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
