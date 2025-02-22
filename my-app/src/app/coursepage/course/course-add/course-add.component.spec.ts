import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponent } from './course-add.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesState } from 'src/app/store/courses/reducers/courses-reducer.reducer';
import { createMockStore, MockStore, provideMockStore } from '@ngrx/store/testing';
import { DurationPipe } from 'src/app/shared/pipe/duration.pipe';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-authors',
  template: '',
})
export class AuthorsMock { }

describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;
  const initCourses = { isLoading: false, courses: [], courseId: null } as unknown as CoursesState;
  const coursesStore: MockStore<CoursesState> = createMockStore({ initialState: initCourses })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAddComponent, AuthorsMock],
      imports: [FormsModule, ReactiveFormsModule, DurationPipe, ButtonModule, CardModule, InputNumberModule, CalendarModule],
      providers: [FormBuilder, provideMockStore()]
    })
      .compileComponents();
    TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 5 fields', () => {
    const element = fixture.debugElement;
    const fields = element.queryAll(By.css('.m-8rem'))

    expect(fields.length).toBe(5)
  })

  it('display name should be', () => {
    const element = fixture.debugElement;
    component.addCourseForm.patchValue({ title: 'title', description: 'description', duration: 11, creationDate: new Date()});
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.title.valid);
      expect(component.description.valid);
      expect(component.duration.valid);
      expect(component.creationDate.valid);
    });
  });

  it('should submit form', (done) => {
    const form = fixture.debugElement.query(By.css('.course-add-form'));
    spyOn(component, 'add');
    component.addCourseForm.patchValue({ title: 'title', description: 'description', duration: 11, creationDate: new Date()});

    form.triggerEventHandler('ngSubmit');

    fixture.whenStable().then(() => {
    expect(component.add).toHaveBeenCalledOnceWith();
      done();
    });
  })

  it('should cancel', (done) => {
    const form = fixture.debugElement.query(By.css('.m-6rem'));
    spyOn(component, 'cancel');

    form.triggerEventHandler('onClick');

    fixture.whenStable().then(() => {
    expect(component.cancel).toHaveBeenCalledOnceWith();
      done();
    });
  })
})
