import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  providers: [TitleCasePipe]
})
export class CourseItemComponent {
  @Input()
  public course: Course = {} as Course;
  @Output()
  public deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output()
  public editCourse: EventEmitter<Course> = new EventEmitter<Course>();

  public delete(): void {
    console.log('Delete ' + this.course.id);
  }

  public edit(): void {
    console.log('Edit ' + this.course.id);
  }
}
