import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { ICategory } from '../interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<{}> {
    return this.http.get<{}>(`http://localhost:8080/api/category`)
  }
  getCategoriesById(id: any): Observable<{}> {
    return this.http.get<{}>(`http://localhost:8080/api/category/${id}`)
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:8080/api/category`,category)
  }
  deleteCategory(id: any): Observable<ICategory> {
    return this.http.delete<ICategory>(`http://localhost:8080/api/category/${id}`)
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:8080/api/category/${category.id}`, category)
  }
}
