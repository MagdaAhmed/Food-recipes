import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-olive-pizza',
  templateUrl: './olive-pizza.page.html',
  styleUrls: ['./olive-pizza.page.scss'],
})
export class OlivePizzaPage implements OnInit {

  show=false;
  like=false;
  item:number;
  public comments=[
{
  ImgUrl:'../../assets/img/person.png',
  title:'Lorem ipsum',
  time:"3h ago",
  paragraph:'consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.'
},
{
  ImgUrl:'../../assets/img/person.png',
  title:'Lorem ipsum',
  time:"3h ago",
  paragraph:'consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.'
},
{
  ImgUrl:'../../assets/img/person.png',
  title:'Lorem ipsum',
  time:"3h ago",
  paragraph:'consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.'
},
{
  ImgUrl:'../../assets/img/person.png',
  title:'Lorem ipsum',
  time:"3h ago",
  paragraph:'consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.consectetur adipiscing elit. Duis ut urna neque.'
}
  ];

  public gallary=[
    {
      url:'../../assets/img/galary1.png'
    },
    {
      url:'../../assets/img/galary2.png'
    },
    {
      url:'../../assets/img/galary3.png'
    },
    {
      url:'../../assets/img/galary4.png'
    },
    {
      url:'../../assets/img/galary1.png'
    },
    {
      url:'../../assets/img/galary2.png'
    },
    {
      url:'../../assets/img/galary1.png'
    }                     
  ];
  constructor() { }

  ngOnInit() {
  }
  show_comment(){
    if(this.show ==true){
      this.show=false;
    }
    else{
      this.show=true;
    }
  }
  Like(){
    if(this.like ==true){
      this.like=false;
    }
    else{
      this.like=true;
    }
  }

  changeImage(cardImage, buttonImage){
    console.log(cardImage, buttonImage)
    cardImage.src = buttonImage.src;
  }
}
