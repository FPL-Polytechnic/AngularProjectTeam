import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvalidateComponent } from './showvalidate.component';

describe('ShowvalidateComponent', () => {
  let component: ShowvalidateComponent;
  let fixture: ComponentFixture<ShowvalidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowvalidateComponent]
    });
    fixture = TestBed.createComponent(ShowvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
