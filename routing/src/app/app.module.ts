import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { ItemsComponent } from './items/items.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import{AuthloginGuard} from './authlogin.guard';
import{AuthloginService} from './authlogin.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    HomeComponent,
    BuyComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AuthService,AuthloginGuard,AuthloginService],//[],
  bootstrap: [AppComponent]
})
export class AppModule { }
