import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories:ICategory[]=[]
  constructor (private categoryService:CategoryService){
      this.categoryService.getCategories().subscribe(data=>{
        this.categories=data.data
      })
  }
  removeHandler(id:any){
    if(confirm ('Bạn có muốn xóa danh mục không?')){
      this.categoryService.deleteCategory(id).subscribe(()=>{
        this.categories=this.categories.filter(category=>category._id!==id)
      })
    }
  }
}
