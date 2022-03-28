import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{

    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 200,
        favorite: false,
        origins: ['italy'],
        imgurl: '/assets/images/img2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 150,
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        imgurl: '/assets/images/img3.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 60,
        favorite: false,
        origins: ['germany', 'us'],
        imgurl: '/assets/images/img4.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 50,
        favorite: true,
        origins: ['belgium', 'france'],
        imgurl: '/assets/images/img5.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 80,
        favorite: false,
        origins: ['india', 'asia'],
        imgurl: '/assets/images/img6.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 100,
        favorite: false,
        origins: ['italy'],
        imgurl: '/assets/images/img7.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pickle',
        price: 100,
        favorite: false,
        origins: ['india'],
        imgurl: '/assets/images/img1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
     
    
  }



