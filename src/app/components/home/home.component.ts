import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[] = [];
  filteredProduct: Product[] = [];

  productService = inject(ProductService);

  constructor() {
    // this.products = this.createArrayOfNumbers();
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      console.log('api call start');
      this.products = result;
      this.filteredProduct = this.products;
      console.log('api call done');
    });
  }

  onAddProduct(event: any) {
    console.log('selected id :', event);
  }

  onSearch(search: string) {
    if (search) {
      this.filteredProduct = this.products.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredProduct = this.products;
    }
  }
}
