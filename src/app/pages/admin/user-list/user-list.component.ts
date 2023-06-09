import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  user: IUser[] = [];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data) => {
      this.user = data.data;
    });
  }
  removeHandler(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa người dùng không?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.user = this.user.filter((user) => user._id !== id);
      });
    }
  }
}
