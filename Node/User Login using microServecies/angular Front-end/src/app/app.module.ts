import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import{HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';



import{ApiGatewayService} from "./api-gateway.service";
import{IsLoggedInService} from './is-logged-in.service';



import{AuthGuard} from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiGatewayService,IsLoggedInService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
