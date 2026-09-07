import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Carousel } from './components/carousel/carousel';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer,Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
