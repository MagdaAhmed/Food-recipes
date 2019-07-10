import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {

  constructor(private modelCrtl:ModalController) { }
async close(){
  await this.modelCrtl.dismiss();
}
  ngOnInit() {}

}
