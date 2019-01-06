import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {
didLogin=false;
  constructor() { }

  loginCheck(){
    if(!this.didLogin){
      return false
    }
    return true;
  }
  
}
