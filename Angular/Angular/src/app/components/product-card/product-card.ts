// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CurrencyPipe, UpperCasePipe } from '@angular/common';
// import { Product } from 'models/product';
// import { highlightDirective } from 'directives/highlight.directive';
// @Component({
//   selector: 'app-product-card',
//   standalone: true,
//   imports: [CurrencyPipe, UpperCasePipe,highlightDirective]
//   templateUrl: './product-card.html',
//   styleUrl: './product-card.css'
// })
// export class ProductCard {

//   @Input() product!: Product;

//   @Output() deleteProduct = new EventEmitter<number>();

//   delete() {
//     this.deleteProduct.emit(this.product.id);
//   }
// }