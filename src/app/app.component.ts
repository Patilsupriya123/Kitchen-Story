import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Welcome to my Kitchen-Story';
  
  imgurl:String="./assets/images/food.webp";
  imgurl1:String="./assets/images/indian-food.webp";
  imgurl2:String="./assets/images/swad_ginger.png";

  imgurl3:String="./assets/images/ketchup.jpg";
  imgurl4:String="./assets/images/pineapple-jam.jpg";

  h:number=150;
  w:number=200;
}
