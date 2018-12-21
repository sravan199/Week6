import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { ItemsComponent } from './items/items.component';

//import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { AuthloginGuard } from './authlogin.guard';


const routes: Routes = [
 {path:"",redirectTo:'/login',pathMatch:'full'},

 // {path:'',component:LoginComponent},
 // children:[
  {path :'login',component : LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthloginGuard]},
  {path:'logout',component:LogoutComponent},
  {path :'items/:id',component : ItemsComponent,canActivate:[AuthGuard],
  children:[
      {path:'buy',component:BuyComponent}
  ]},
 // ]},
  {path :'**',component : ErrorComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
