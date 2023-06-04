import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interfaces/category';
@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss'],
})
export class ProductListAdminComponent {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data.docs;
    });
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data.data;
    });
  }
  removeHandler(id: any) {
    if (confirm('Bạn có muốn xóa sản phẩm không ?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Xóa sản phẩm thành công ✅');
        this.products = this.products.filter((product) => product._id !== id);
      });
    }
  }
  categoryName(id: any) {
    const category = this.categories.find((item) => item._id === id);
    return category?.name;
  }
}
