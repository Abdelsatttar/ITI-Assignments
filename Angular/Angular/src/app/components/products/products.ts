import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productsAll: { id: number, name: string, price: number, image: string, inStock: boolean, category: string }[] = [];
  selectedCategory: string = 'All';

  constructor() {
    this.productsAll = [
      { id: 1, name: 'Smart Watch', price: 120, image: 'watch.jpg', inStock: true, category: 'sport' },
      { id: 2, name: 'Classic Watch', price: 90, image: 'watch2.jpeg', inStock: false, category: 'classic' },
      { id: 3, name: 'Sport Watch', price: 150, image: 'watch3.jpg', inStock: true, category: 'sport' },
      { id: 4, name: 'Luxury Watch', price: 300, image: 'watch3.webp', inStock: false, category: 'luxury' }
    ];
  } 
}
