import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);

  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(1)]],
    brand: ['', [Validators.required]],
    imageUrl: [''],
    originalPrice: [''],
    discountedPrice: [''],
    discountPercentage: [''],
  });

  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.productForm.patchValue(result);
    });
  }

  editProduct() {
    if (this.productForm.invalid) {
      alert('provide valid details.');
      return;
    }

    this.productService
      .updateProduct(this.productForm.value)
      .subscribe((result) => {
        alert('product updated');
        this.router.navigateByUrl('/');
      });
  }
}
