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
  constructor(private productsUser: UserService) {
    this.productsUser.getUsers().subscribe((data) => {
      this.user = data.data;
    });
  }
}
