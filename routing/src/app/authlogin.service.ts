import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {


  didlogin=true;
  constructor() { }

  public isAuthenticated():boolean{
    if(this.didlogin)
    return false;
    
    return true;
  }

}
