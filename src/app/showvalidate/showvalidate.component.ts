import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-showvalidate',
  templateUrl: './showvalidate.component.html',
  styleUrls: ['./showvalidate.component.scss']
})
export class ShowvalidateComponent {
  @Input() field: any;
  @Input() key: string;
  constructor() { 
    this.key = ''
  }
}
