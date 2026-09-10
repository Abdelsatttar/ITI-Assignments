import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  imports: [],
  templateUrl: './one-way-binding.html',
  styleUrl: './one-way-binding.css',
})
export class OneWayBinding {
  usreName: string = 'John Doe';
  age: number = 30;
  email: string = 'john.doe@example.com';
  flag:boolean=false;
  arr:string[]=['red','green','blue','yellow'];
  obi={
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  }
}
