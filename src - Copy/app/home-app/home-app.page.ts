import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.page.html',
  styleUrls: ['./home-app.page.scss'],
})
export class HomeAppPage implements OnInit {

  currentRate = 8;

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
  constructor(private menu: MenuController) { }
  
  ngOnInit() {
    this.menu.enable(true);
  }

}
