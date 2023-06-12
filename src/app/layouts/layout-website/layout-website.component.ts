import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-website',
  templateUrl: './layout-website.component.html',
  styleUrls: ['./layout-website.component.scss'],
})
export class LayoutWebsiteComponent {
  inputSearch: string = ''
  user: any = {};
    constructor(
    private router: Router,

    ) {
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
  
  onInputSearch(event: any){
    this.inputSearch = event.target.value
  }

  onSearch(){
    this.router.navigateByUrl(`/search?q=${this.inputSearch}`)
  }
}
