import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  activeIcon=false;
  colorIcon=false;
  public appPages = [
    {
      title: 'Home', 
      url:'/home-app',
      icon: 'home', 
    },
    {
      title: 'Profile', 
      url:'/profile',
      icon: 'person', 
    },
    {
      title: 'My Favorite', 
      url:'/favorite',
      icon: 'heart', 
    },
    {
      title: 'My Recipes', 
      url:'/olive-pizza',
      icon: 'paper', 
    },
    {
      title: 'Setting', 
      url:'/setting',
      icon: 'settings', 
    },
    {
      title: 'LogOut', 
      url:'/sign-in',
      icon: 'power', 
    }   
  ];
  Actived(listRef, index){
    var listChildren = listRef.el.children;
    for(var i = 0; i<listChildren.length; i++){
      listChildren[i].classList.remove('active-btn');
    }

    listChildren[index].classList.add('active-btn');  
  }
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
