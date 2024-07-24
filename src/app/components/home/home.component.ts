import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: number[];

  constructor() {
    this.products = this.createArrayOfNumbers();
  }

  createArrayOfNumbers(): number[] {
    const array: number[] = [];
    for (let i = 0; i < 100; i++) {
      array.push(i + 1);
    }
    return array;
  }
}
