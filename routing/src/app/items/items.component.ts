import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 itemId:any;
 list=[
[{image:'https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg?downsize=650:400&output-quality=70&output-format=webp',restaurants:'Bawarchi',costs:'200',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://www.ndtv.com/cooks/images/mutton-biryani-new.jpg?downsize=650:400&output-quality=70&output-format=webp',restaurants:'Mehfil',costs:'200',time:'25 min',mode:'Accepts only cash'},
{image:'https://cdn.awesomecuisine.com/wp-content/uploads/2007/10/authentic_chicken_biryani.jpg',restaurants:'Grand Bavarchi',costs:'200',time:'15 min',mode:'Accepts cash & online payments'},
{image:'https://cdn.24.co.za/files/Cms/General/d/514/c1f29d65a3fb4560ae952f689464fdd2.jpg',restaurants:'Kings Palace',costs:'200',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://www.thespruceeats.com/thmb/gKyPyolM6SOnulhAAhEKlMh8fZg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4557653237_6ab05ae729_o-56a510385f9b58b7d0dabdba.jpg',restaurants:'R Royal Bawarchi',costs:'200',time:'50 min',mode:'online payments only'},
{image:'https://foodibase.com/wp-content/uploads/2017/02/2359394-easy-chicken-dum-biryani-350x350.jpg',restaurants:'Azam Hotel',costs:'200',time:'35 min',mode:'Accepts cash & online payments'},
{image:'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Lagan-ki-Murgh-Biryani-Sanjeev-Kapoor-Kitchen-FoodFood.jpg',restaurants:'Metro Bawarchi',costs:'200',time:'25 min',mode:'Accepts cash & online payments'},
{image:'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Kachche-Gosht-ki-Biryani-Sanjeev-Kapoor-Kitchen-FoodFood.jpg',restaurants:'A-one Restaurant',costs:'200',time:'20 min',mode:'online payments only'},
{image:'https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg',restaurants:'SBR Restaurant',costs:'250',time:'40 min',mode:'Accepts cash & online payments'}
],

[{image:'https://i.ndtvimg.com/i/2016-06/noodles-625_625x350_41465896870.jpg?downsize=650:400&output-quality=70&output-format=webp',restaurants:'Food Corner',costs:'50',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://farm5.staticflickr.com/4721/40013647691_ef9a51e90a_b.jpg',restaurants:'Food Of Indians',costs:'100',time:'25 min',mode:'Accepts only cash'},
{image:'https://www.dinneratthezoo.com/wp-content/uploads/2016/02/shrimp-chow-mein-2-2.jpg',restaurants:'Express Maggi Chinese Point',costs:'200',time:'15 min',mode:'Accepts cash & online payments'},
{image:'https://storage.googleapis.com/ehimages/2018/2/27/img_9cc345e7980585106519c2d9ac89aa5b_1519699182736_processed_original.jpg',restaurants:'Chinese Fast Food',costs:'300',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gfp5y734qn66hgn1yjpn',restaurants:'SR Chinese Fast Food',costs:'75',time:'50 min',mode:'online payments only'},
{image:'https://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg',restaurants:'Beijing Bistro ',costs:'60',time:'35 min',mode:'Accepts cash & online payments'},
{image:'http://mediad.publicbroadcasting.net/p/kcur/files/styles/medium/public/201801/Cashew-Chicken-Dish-Chinese-Food-1273256.jpg',restaurants:'R Royal Bawarchi',costs:'100',time:'30 min',mode:' Accepts cash & online payments'},
{image:'https://www.tasteofhome.com/wp-content/uploads/2018/05/Asian-Wraps_EXPS_EDSC17_196592_C03_10_4b-696x696.jpg',restaurants:'fast Zyno',costs:'150',time:'30 min',mode:'online payments only'},
{image:'https://assets3.thrillist.com/v1/image/1864928/size/tl-horizontal_main_2x.jpg',restaurants:'A-one Restaurant',costs:'200',time:'20 min',mode:'Accepts cash & online payments'}
],

[{image:'https://www.seriouseats.com/recipes/images/2012/07/20120712-214287-blue-moon-ice-cream.jpg',restaurants:'Blue Moon',costs:'50',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://www.haagendazs.us/sites/default/files/flavors/Hero_Bowl_BourbonPralinePecan.jpg',restaurants:'Caramel Praline',costs:'100',time:'25 min',mode:'Accepts only cash'},
{image:'https://static01.nyt.com/images/2014/04/18/dining/Bittersweet-Chocolate-Ice-Cream/Bittersweet-Chocolate-Ice-Cream-articleLarge.jpg',restaurants:'Chocolate',costs:'200',time:'15 min',mode:'Accepts only cash '},
{image:'https://lmld.org/wp-content/uploads/2017/08/chocolate-fudge-brownie-ice-cream-1.jpg',restaurants:'Chocolate Brownies',costs:'300',time:'45 min',mode:'Accepts cash & online payments'},
{image:'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2.jpg',restaurants:'Kulfi',costs:'75',time:'20 min',mode:'online payments'},
{image:'https://whatagirleats.com/wp-content/uploads/2012/08/IMG_4498.jpg',restaurants:'Toasted Almond',costs:'200',time:'20 min',mode:'Accepts only cash'}

],

 ]

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
   //this.itemId=id;
   this.route.paramMap.subscribe((params:ParamMap)=>{
     let id =parseInt(params.get("id"));
     this.itemId=id;
   });
  }

  alertfun(){
    alert("do you want to logout");
  }

  placeorder(){
    this.router.navigate(['buy'],{relativeTo:this.route});
  }

}
