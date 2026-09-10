

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive.ts';

@Component({
  selector: 'app-product-card',
  imports: [HighlightDirective],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product: any;

  @Output() deleteProduct = new EventEmitter<number>();

  delete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}