import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesheaderComponent } from './coursesheader.component';

describe('CoursesheaderComponent', () => {
  let component: CoursesheaderComponent;
  let fixture: ComponentFixture<CoursesheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
