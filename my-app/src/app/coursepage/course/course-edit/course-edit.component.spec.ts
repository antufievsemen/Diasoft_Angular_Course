import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditComponent } from './course-edit.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesState } from 'src/app/store/courses/reducers/courses-reducer.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DurationPipe } from 'src/app/shared/pipe/duration.pipe';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { By } from '@angular/platform-browser';
import { CourseService } from '../course.service';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@Component({
  selector: 'app-authors',
  template: '',
})
export class AuthorsMock { }

xdescribe('CourseEditComponent', () => {
  let component: CourseEditComponent;
  let fixture: ComponentFixture<CourseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseEditComponent, AuthorsMock],
      imports: [FormsModule, ReactiveFormsModule, DurationPipe, ButtonModule, CardModule, InputNumberModule, CalendarModule, RouterModule, StoreRouterConnectingModule.forRoot()],
      providers: [FormBuilder, provideMockStore()]
    })
      .compileComponents();
    
    TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseEditComponent);
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

  it('all fields should be', () => {
    const element = fixture.debugElement;
    component.editCourseForm.patchValue({ title: 'title', description: 'description', duration: 11, creationDate: new Date()});
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
    spyOn(component, 'edit');
    component.editCourseForm.patchValue({ title: 'title', description: 'description', duration: 11, creationDate: new Date()});

    form.triggerEventHandler('ngSubmit');

    fixture.whenStable().then(() => {
    expect(component.edit).toHaveBeenCalledOnceWith();
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

function autoSpy<T>(obj: new (...args: any) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as SpyOf<T>;

  Object.getOwnPropertyNames(obj.prototype).forEach((key) => {
    // @ts-ignore
    res[key] = jasmine.createSpy(key);
  });
  return res;
}

type SpyOf<T> = T & Partial<{ [k in keyof T]: T[k] extends (...args: any[]) => any ? jasmine.Spy : T[k] }>;
