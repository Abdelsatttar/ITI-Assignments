// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.html',
//   styleUrl: './products.css',
// })
// export class Products {}


import { Component, signal, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products = signal([
    {
      id: 1,
      name: 'Smart Watch',
      price: 120,
      image: 'watch.png',
      inStock: true,
      category: 'sport'
    },
    {
      id: 2,
      name: 'Classic Watch',
      price: 90,
      image: 'watch.png',
      inStock: false,
      category: 'classic'
    },
    {
      id: 3,
      name: 'Sport Watch',
      price: 150,
      image: 'watch.png',
      inStock: true,
      category: 'sport'
    },
    {
      id: 4,
      name: 'Luxury Watch',
      price: 300,
      image: 'watch.png',
      inStock: false,
      category: 'luxury'
    }
  ]);

  selectedCategory = new FormControl('all');

  filteredProducts = computed(() => {

    const category = this.selectedCategory.value;

    if (category === 'all') {
      return this.products();
    }

    return this.products().filter(
      product => product.category === category
    );

  });

  addToCart(productName: string) {
    alert(`${productName} added to cart!`);
  }
}