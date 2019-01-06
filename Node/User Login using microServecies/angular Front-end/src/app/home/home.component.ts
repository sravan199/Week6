import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router, ParamMap} from '@angular/router'


import{ApiGatewayService} from "../api-gateway.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  value:any=false;
  done=false;
  registered=[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private apiGateway:ApiGatewayService) { }

  ngOnInit() {

 

     this.apiGateway.fetchApi('http://localhost:3000').subscribe((res:any)=>{
          this. registered= res;
          console.log("default registered list");
          console.log(this. registered)
          this.done=true;
     
             }); 
   

}

}
