import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(
    private productService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: ICategory = {
        name: this.productForm.value.name || '',
      };
      this.productService.addCategory(product).subscribe((category) => {
        alert('Thêm danh mục thành công ✅');
        this.router.navigateByUrl('/admin/category');
      });
    }
  }
}
