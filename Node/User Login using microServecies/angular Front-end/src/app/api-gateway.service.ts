import { Injectable } from '@angular/core';

import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private http:HttpClient) { }

  
  fetchApi(apiurl:string){
   return  this.http.get(apiurl) 
  }
  fetchApipost(apiurl:string,data){
    return  this.http.post(apiurl,data) 
   }
}
