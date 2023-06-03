import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
   constructor (private productService:ProductService){
       this.productService.getProducts().subscribe(data=>{
          console.log(data);
       })
   }
}
