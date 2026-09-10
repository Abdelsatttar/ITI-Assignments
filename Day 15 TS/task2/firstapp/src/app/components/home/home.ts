
import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Carousel,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}