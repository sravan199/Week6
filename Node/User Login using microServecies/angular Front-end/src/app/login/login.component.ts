import { Component, OnInit } from '@angular/core';

import{ApiGatewayService} from "../api-gateway.service";
import{IsLoggedInService} from '../is-logged-in.service';

import {ActivatedRoute,Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameEmail:any="";
   password:any="";
  done=false;
  value:any=0;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private apiGateway:ApiGatewayService,private isLoggedIn:IsLoggedInService) { }

  onclick(){
        
        if((this.userNameEmail!="")&&(this.password!="")){
         
      this.apiGateway.fetchApipost('http://localhost:3000',{userNameEmail:this.userNameEmail,password:this.password}).subscribe((res:any)=>{
           this. value= res.id;

          if(this.value){
            this.isLoggedIn.didLogin=true;
            console.log("logined as  " +this.userNameEmail);
             this.router.navigate(['/home']);
          }
          else{
            alert(res.msg);
          }            
             }); 

        }
  else{
    this.isLoggedIn.didLogin=false;
    alert("please fill details below ");
  }
    
  }
  forRegister(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  
    }

}
