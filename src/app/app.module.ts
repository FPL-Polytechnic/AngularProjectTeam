import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LayoutWebsiteComponent,
    HomePageComponent,
     RegisterUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
