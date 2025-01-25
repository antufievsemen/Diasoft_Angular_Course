import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Course } from 'src/app/domain/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [];
  constructor() {
    let fut = new Date();
    let pre = new Date();
    fut.setDate(fut.getDate() - 7);
    pre.setDate(pre.getDate() + 7);

    this.courses = [{ id: 1, title: 'test', creationDate: fut, description: 'Lorem ipsum', duration: 100, topRated: false },
    { id: 2, title: 'test2', creationDate: pre, description: 'Lorem ipsum 2', duration: 150, topRated: true }
    ];
  }

  public getList(): Course[] {
    return this.courses;
  }

  public createCourse(course: Course): Course {
    return {} as Course;
  }

  public getItemById(id: number): Course {
    return this.courses.filter(a => a.id === id)[0];
  }

  public update(): Course {
    return {} as Course;
  }

  public remove(course: Course): void {
    this.courses = this.courses.filter(a => a !== course);
  }
}
