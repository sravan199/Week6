import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public authService:AuthService,public router : Router){}
  
  canActivate():boolean{
    console.log(this.authService.isAuthenticated());
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['/home']);
      return false;
    }
     return true;
  }
}
