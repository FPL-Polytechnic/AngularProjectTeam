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
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AuthGuard } from './auth.guard';
import { UserEditComponent } from './pages/admin/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'search', component: SearchPageComponent },
    ],
  },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'user/:id/edit', component: UserEditComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListAdminComponent },
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id/edit', component: ProductUpdateComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/:id/edit', component: CategoryUpdateComponent },
      { path: 'user', component: UserListComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
