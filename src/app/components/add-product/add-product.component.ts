import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  productService = inject(ProductService);
  router = inject(Router);
  toastrService = inject(ToastrService);

  product: Product = {
    name: '',
    brand: '',
    imageUrl: '',
    originalPrice: 0,
    discountedPrice: 0,
    discountPercentage: 0,
  };

  addProduct() {
    this.productService.addProduct(this.product).subscribe((result) => {
      this.toastrService.success('product saved');
      this.router.navigateByUrl('/');
    });
  }
}
