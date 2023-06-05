import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent {
  category!: ICategory;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router :Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.categoryService.getCategoriesById(id).subscribe(
        (product) => {
          this.category=product.category
        
           this.productForm.patchValue({
          name:this.category.name            
          });
        },
        (error) => console.log(error.message)
      );
    });
  }

  
  onHandleSubmit() {
    if (this.productForm.valid) {
      console.log(this.category);
      
      const newProduct: ICategory = {
        _id:this.category._id || "",
        name: this.productForm.value.name || '',
      };
      this.categoryService.updateCategory(newProduct).subscribe((product) => {
        console.log("them san pham thanh cong",product);
        this.router.navigateByUrl('/admin/category')
      });
    }
  }
}
