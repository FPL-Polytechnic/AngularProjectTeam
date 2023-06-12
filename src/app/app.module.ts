import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListAdminComponent } from './pages/admin/product-list-admin/product-list-admin.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './pages/admin/category-update/category-update.component';
import { ShowvalidateComponent } from './showvalidate/showvalidate.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserEditComponent } from './pages/admin/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LayoutWebsiteComponent,
    HomePageComponent,
    RegisterUserComponent,
    LoginUserComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductListAdminComponent,
    ProductDetailComponent,
    CategoryAddComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
    ShowvalidateComponent,
    UserListComponent,
    SearchPageComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
