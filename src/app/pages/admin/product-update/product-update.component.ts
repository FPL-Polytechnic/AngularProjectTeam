import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { ICategory } from 'src/app/interfaces/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  categories: ICategory[] = [];
  products: IProduct[] = [];
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    image: [''],
    description: ['', [Validators.required, Validators.minLength(4)]],
    color: [''],
    categoryId: [null, [Validators.required]],
  });

  productId: string | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id;
      this.getProduct(this.productId);
    }
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.data;
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data.docs;
      });
    });
  }

  getProduct(id: string) {
    this.productService.getProductsById(id).subscribe(
      (product) => {
        // console.log(product);
        this.productForm.patchValue(product.data);
      },
      (error) => {
        console.log(error); // Log lỗi để kiểm tra nguyên nhân
      }
    );
  }

  onHandleUpdate() {
    if (this.productForm.valid) {
      const updatedProduct: IProduct = {
        _id: this.productId || undefined,
        name: this.productForm.value.name || '',
        image: this.productForm.value.image || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        color: this.productForm.value.color || '',
        categoryId: this.productForm.value.categoryId || undefined,
      };

      this.productService.updateProduct(updatedProduct).subscribe(
        (product) => {
          alert('Cập nhật sản phẩm thành công ✅');
          this.router.navigateByUrl('/admin/products');
        },
        (error) => {
          alert('Cập nhật sản phẩm không thành công ❌');
        }
      );
    }
  }
}
