import { Component, OnInit } from '@angular/core';
import { AuthloginService } from '../authlogin.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authloginServices :AuthloginService,private authServices :AuthService,private router:Router){ }

  ngOnInit() {
  }
  
  clicked(){
    this.authloginServices.didlogin=true;
    this.authServices.value=true;
    this.router.navigate(['/login']);
  }

}
