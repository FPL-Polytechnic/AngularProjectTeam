import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../../assets/css/main copy.css']
})
export class ProductDetailComponent {
  product!: IProduct
  productSimilar!:IProduct[]
  constructor(private router: ActivatedRoute, private productService: ProductService,private categoryService:CategoryService) {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id')
      this.productService.getProductsById(id).subscribe(data => {
         this.categoryService.getCategoriesById(data.data.categoryId._id).subscribe((data)=>{
            this.productSimilar=data.category.products.filter((item:any)=>item._id!==id)
         })
         this.product = data.data
         
      })
    })
  }

}
