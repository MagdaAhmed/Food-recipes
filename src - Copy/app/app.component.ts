import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title1: 'Home',
      title2:'Profile',
      url1:'/home-app',
      url2: '/profile',
      icon1: 'home',
      icon2:'person'
    },
    {
      title1: 'My Favorite',
      title2:'My Recipes',
      url1:'/favorite',
      url2: '/olive-pizza',
      icon1: 'heart',
      icon2:'paper'
    },
    {
      title1: 'Setting',
      title2:'Log Out',
      url1:'/setting',
      url2: '/sign-in',
      icon1: 'settings',
      icon2:'power'
    }    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
