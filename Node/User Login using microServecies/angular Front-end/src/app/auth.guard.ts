import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs';


import{IsLoggedInService} from './is-logged-in.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private isLoggedIn:IsLoggedInService,private router:Router){}

  canActivate():boolean{
    if(!this.isLoggedIn.loginCheck()){
      this.router.navigate(['/login']);
    return false;
    }
    return true;
  }
}

