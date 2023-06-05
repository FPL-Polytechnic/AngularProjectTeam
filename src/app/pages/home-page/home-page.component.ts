import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
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
  categoryName(id: any) {
    const category = this.categories.find((item) => item._id === id);
    return category?.name;
  }


}
