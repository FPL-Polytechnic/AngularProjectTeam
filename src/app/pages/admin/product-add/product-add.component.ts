import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  categories: ICategory[] = [];
  productForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0, [Validators.required, Validators.min(1)]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    color: ['', [Validators.required]],
    categoryId: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.data;
    });
  }

  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        image: this.productForm.value.image || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        color: this.productForm.value.color || '',
        categoryId: this.productForm.value.categoryId || '',
      };
      this.productService.addProduct(product).subscribe((product) => {
        alert('Thêm sản phẩm thành công ✅');
        this.router.navigateByUrl('/admin/products');
      });
    }
  }
}
