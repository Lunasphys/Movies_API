import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyListPage } from './my-list.page';

describe('MyListPage', () => {
  let component: MyListPage;
  let fixture: ComponentFixture<MyListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
