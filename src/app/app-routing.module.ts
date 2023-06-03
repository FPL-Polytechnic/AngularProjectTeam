import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';

const routes: Routes = [
  {path:"",component:LayoutWebsiteComponent,children:[
    {path:'',component:HomePageComponent,
    }
  ]},
   { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
