import { Component, OnInit } from '@angular/core';

import {IsLoggedInService} from '../is-logged-in.service';
import{ApiGatewayService} from "../api-gateway.service";


import {ActivatedRoute,Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  first_name:any="";
  email:any="";
  password:any="";
  password_confirmation:any="";

  value:any=false;
  constructor(private isLoggedIn:IsLoggedInService,private apiGateway:ApiGatewayService,private router:Router) { }

  ngOnInit() {
  }

  onclick(){
        
    if((this.first_name!="")&&(this.password!="")&&(this.email!="")&&(this.password_confirmation!="")){
      if(this.password_confirmation===this.password){
           this.apiGateway.fetchApipost('http://localhost:3000/register',{name:this.first_name,email:this.email,password:this.password}).subscribe((res:any)=>{
          this. value= res.id;
          console.log(" updated registered data list ");
          console.log(res);

          if(!this.value){
              this.isLoggedIn.didLogin=true;
              console.log("logged in as  " +this.first_name);
              this.router.navigate(['/home']);
          }
          else{
            alert("User exists choose different name");
          }            
             }); 
      }
      else{
        alert("Password missmatch");
      }

    }
else{
this.isLoggedIn.didLogin=false;
alert("please fill details below ");
}

}


}
