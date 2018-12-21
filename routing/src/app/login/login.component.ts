import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthloginService } from '../authlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
img='http://crybytes.com/wp-content/uploads/IMG_1786.png';

  
   
constructor(private router:Router,private authloginService:AuthloginService){}

  onclick(){
    this.authloginService.didlogin=false;
   this.router.navigate(['/home']);
}
  ngOnInit() {
  }

}
