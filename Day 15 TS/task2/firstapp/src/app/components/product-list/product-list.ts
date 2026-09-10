import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    {
      id: 1,
      name: 'Smart Watch',
      price: 120,
      category: 'Sport',
      inStock: true
    },
    {
      id: 2,
      name: 'Classic Watch',
      price: 90,
      category: 'Classic',
      inStock: false
    },
    {
      id: 3,
      name: 'Luxury Watch',
      price: 300,
      category: 'Luxury',
      inStock: true
    },
    {
      id: 4,
      name: 'Sport Watch',
      price: 150,
      category: 'Sport',
      inStock: true
    }
  ];

  deleteProduct(id: number): void {

    this.products = this.products.filter(
      product => product.id !== id
    );

  }
}