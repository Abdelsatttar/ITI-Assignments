import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Highlight } from '../directives/highlight';
import { Product } from '../directives/models/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, UpperCasePipe, Highlight],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  @Input() product!: Product;

  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}
