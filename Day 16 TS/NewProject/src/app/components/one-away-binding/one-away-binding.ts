import { Component } from '@angular/core';

@Component({
  selector: 'app-one-away-binding',
  imports: [],
  templateUrl: './one-away-binding.html',
  styleUrl: './one-away-binding.css',
})
export class OneAwayBinding {
  userName: string = 'John Doe';
  phoneNumber: string = '123-456-7890';
  flag: boolean = true;
}
