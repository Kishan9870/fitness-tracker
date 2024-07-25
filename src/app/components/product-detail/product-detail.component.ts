import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product!: Product;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.product = result;
    });
  }
}
