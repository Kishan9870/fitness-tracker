import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../types/product';
import { RupeePipe } from '../../pipes/rupee.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, UpperCasePipe, RupeePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addProduct = new EventEmitter<string>();

  addToCart() {
    // this.addProduct.emit(this.product.id);
  }

  viewProduct() {
    this.addProduct.emit(this.product.id);
  }
}
