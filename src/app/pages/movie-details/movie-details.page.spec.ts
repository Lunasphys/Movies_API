
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MovieDetailsPage } from './movie-details.page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  alertButtons = ['Action'];
}
describe('MovieDetailsPage', () => {
  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsPage ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
