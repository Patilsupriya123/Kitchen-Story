import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-app',
  templateUrl: './welcome-app.component.html',
  styleUrls: ['./welcome-app.component.css']
})
export class WelcomeAppComponent implements OnInit {

  imgurl5:String="./assets/images/welcome.jpg";
  h:number=150;
  w:number=200;



  constructor() { }

  ngOnInit(): void {

  }

}
