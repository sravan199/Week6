import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthloginService } from './authlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements CanActivate {

constructor(private authloginService :AuthloginService,private router :Router ){};


  canActivate():boolean{
    if(!this.authloginService.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
