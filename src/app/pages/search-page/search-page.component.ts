import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  p: number = 1;
  q: string = '';

  searchKeyword: string = '';
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {
    this.q = this.route.snapshot.queryParams['q']
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   ngOnInit(): void {
    this.productService.searchProduct(this.q).subscribe(data => {
      // console.log(data)
      this.products = data
    })
  }



}
