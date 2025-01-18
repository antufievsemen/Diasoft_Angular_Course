import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [{ id: 1, title: 'test', creationDate: new Date(), description: 'Lorem ipsum', duration: 100 },
      { id: 2, title: 'test2', creationDate: new Date(), description: 'Lorem ipsum 2', duration: 150 }
    ];
  }

  public loadMore(): void {
    console.log('Load more');
  }

  public deleteCourse(course: any): void {
    console.log('Delete ' + course.id);
  }

  public editCourse(course: any): void {
    console.log('Edit ' + course.id);
  }
}
