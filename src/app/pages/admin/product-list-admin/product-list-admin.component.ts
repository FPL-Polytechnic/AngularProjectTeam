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
  filteredProducts: IProduct[] = [];
  searchKeyword: string = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.data.docs;
      this.filterProducts();
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
        this.filterProducts();
      });
    }
  }

  categoryName(id: any) {
    const category = this.categories.find((item) => item._id === id);
    return category?.name;
  }

  searchProducts() {
    this.productService.searchProducts(this.searchKeyword).subscribe((data) => {
      this.products = data.data.docs;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  onSearchKeywordChange() {
    this.filterProducts();
  }
}
