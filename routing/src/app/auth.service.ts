import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 value=true;

  public isAuthenticated():boolean{
    if(this.value)
    return false;
    
    return true;
  }


}
