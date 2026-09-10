import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneAwayBinding } from './components/one-away-binding/one-away-binding';
import { Tracks } from './components/tracks/tracks';

@Component({
  selector: 'app-root',
  imports: [ Tracks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NewProject');
}
