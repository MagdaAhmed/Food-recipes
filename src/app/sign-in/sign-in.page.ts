import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {ModalPageComponent} from '../modal-page/modal-page.component'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private menu: MenuController , private modelCtrl:ModalController ) { }
async showModel(){
  const modal = await this.modelCtrl.create({
    component: ModalPageComponent
  });
  return await modal.present();
}
  ngOnInit() {
    this.menu.enable(false);
  }

}
