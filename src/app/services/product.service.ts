import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<{}> {
    return this.http.get<{}>(`http://localhost:8080/api/product`)
  }
  getProductsById(id: any): Observable<{}> {
    return this.http.get<{}>(`http://localhost:8080/api/product/${id}`)
  }
  addProduct(product: any): Observable<{}> {
    return this.http.post(`http://localhost:8080/api/product`, product)
  }
  deleteProduct(id: any): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/api/product/${id}`)
  }
  updateProduct(product:any):Observable<{}>{
    return this.http.patch<{}>(`http://localhost:8080/api/product/${product.id}`,product)
 }
}
