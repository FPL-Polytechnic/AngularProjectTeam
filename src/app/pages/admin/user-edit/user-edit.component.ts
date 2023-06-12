import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
  user!: IUser;
  userForm = this.formbuilder.group({
    name: [''],
    email: [''],
  });
  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router1: Router
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.userService.getUserById(id).subscribe((data) => {
        this.user = data.user;
        this.userForm.patchValue({
          name: data.user.name,
          email: data.user.email,
        });
      });
    });
  }
  submitHandler() {
    const newUser = {
      _id: this.user._id,
      name: this.userForm.value.name || '',
      email: this.userForm.value.email || '',
    };
    this.userService.updateUser(newUser).subscribe(() => {
      alert('Cập nhật user thành công ✅');
      this.router1.navigateByUrl('/admin/user');
    });
  }
}
