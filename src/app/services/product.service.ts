import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/product`);
  }
  getProductsById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/product/${id}`);
  }
  addProduct(product: any): Observable<{}> {
    return this.http.post(`http://localhost:8080/api/product`, product);
  }
  deleteProduct(id: any): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/api/product/${id}`);
  }
  updateProduct(product: any): Observable<{}> {
    return this.http.patch<{}>(
      `http://localhost:8080/api/product/${product._id}`,
      product
    );
  }
  searchProducts(search: string): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/product/search?keyword=${search}`
    );
  }
  searchProduct(key: any): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/search?key=${key}`
    );
  }
}
