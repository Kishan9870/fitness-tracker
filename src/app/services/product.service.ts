import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  httpClient = inject(HttpClient);

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }
}
