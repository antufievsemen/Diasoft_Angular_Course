import { Injectable } from '@angular/core';
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
    return this.courses.filter(a => a.id === Number(id))[0];
  }

  public update(course: Course): Course {
    let old = this.courses.find(c => c.id === Number(course.id))
    if (old) {
      old.creationDate = course.creationDate;
      old.description = course.description;
      old.duration = course.duration;
      old.title = course.title;
      return old;
    }
    return course;
  }

  public remove(course: Course): void {
    this.courses = this.courses.filter(a => a !== course);
  }
}
