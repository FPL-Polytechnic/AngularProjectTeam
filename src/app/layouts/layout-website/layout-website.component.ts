import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-website',
  templateUrl: './layout-website.component.html',
  styleUrls: ['./layout-website.component.scss'],
})
export class LayoutWebsiteComponent {
  user: any = {};
  constructor() {
    const data: any = JSON.parse(
      localStorage.getItem('accessToken') as string
    )?.user;
    this.user = data;
  }
  logOut() {
    alert('Đăng xuất thành công ✅');
    localStorage.removeItem('accessToken');
    this.user = false;
  }
}
