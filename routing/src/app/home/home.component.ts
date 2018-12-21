import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list=[
 {id:1,name:'biryani',images:'https://images.food52.com/r2wsCDTJdoAB97kLIziNKxAVlic=/753x502/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg'},
 {id:2,name:'Chinese',images:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?w968'},
 {id:3,name:'iceCream',images:'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'},
  ]

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }
  alertfun(){
    alert("do you want to logout");
  }
  onclick(element){
    this.authService.value=false;
    this.router.navigate(['/items',element.id]);
  }

}
