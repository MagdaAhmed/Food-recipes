import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  public cards = [
    {
      ImgUrl:'../../assets/img/favorite1.png',
      title:'BBQ Recipe'
    },
    {
      ImgUrl:'../../assets/img/favorite2.png',
      title:'SandWich Recipe'
    },
    {
      ImgUrl:'../../assets/img/pizza.png',
      title:'Olive Pizza Recipe'
    },
    {
      ImgUrl:'../../assets/img/favorite1.png',
      title:'BBQ Recipe'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
