import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images:string[]=['/images/poert1.png','/images/port2.png','/images/port3.png',
    '/images/poert1.png','/images/port2.png','/images/port3.png'
  ]
  hiden:boolean= true
  imgSrc:string=""


  hidenModel(e:MouseEvent,img:HTMLImageElement){
    console.log(e.target)
    if(e.target != img  ){
      this.hiden = true
    }
  }
  
}
