import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';

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
  router = inject(Router);

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
    this.router.navigateByUrl('/product/' + event);
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
