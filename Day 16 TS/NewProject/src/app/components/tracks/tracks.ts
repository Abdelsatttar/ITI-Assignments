import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks',
  imports: [FormsModule],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css',
})
export class Tracks {
  selectedGenre: string = 'All';
  ititracks:{id:number,name:string,department:string}[] = []
  constructor(){
    this.ititracks = [
      {id:1,name:'Angular',department:'FrontEnd'},
      {id:2,name:'React',department:'FrontEnd'},
      {id:3,name:'Vue',department:'FrontEnd'},
      {id:4,name:'Node',department:'BackEnd'},
      {id:5,name:'Express',department:'BackEnd'},
      {id:6,name:'MongoDB',department:'Database'},
      {id:7,name:'MySQL',department:'Database'},
    ]
  }

}
