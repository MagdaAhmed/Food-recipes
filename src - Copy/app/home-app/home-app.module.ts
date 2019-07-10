import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAppPage } from './home-app.page';
import { IonicRatingModule } from 'ionic4-rating/dist/index';

const routes: Routes = [
  {
    path: '',
    component: HomeAppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicRatingModule
  ],
  declarations: [HomeAppPage]
})
export class HomeAppPageModule {}
