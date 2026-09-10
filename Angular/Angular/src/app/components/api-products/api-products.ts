import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';
import { ProductApiService } from '../../services/product-api';
@Component({
  selector: 'app-api-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './api-products.html',
  styleUrl: './api-products.css'
})
export class ApiProducts implements OnInit {

  products: Product[] = [];

  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    this.productApiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}