import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { OrderByPipe } from './pipe/order-by.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [OrderByPipe, FilterPipe]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchInput: string = '';

  constructor(private orderPipe: OrderByPipe,
    private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    let fut = new Date();
    let pre = new Date();
    fut.setDate(fut.getDate() - 7);
    pre.setDate(pre.getDate() + 7);

    this.courses = [{ id: 1, title: 'test', creationDate: fut, description: 'Lorem ipsum', duration: 100, topRated: false },
    { id: 2, title: 'test2', creationDate: pre, description: 'Lorem ipsum 2', duration: 150, topRated: true }
    ];
    this.courses = this.orderPipe.transform(this.courses, 'creationDate');
  }


  public search(): void {
      this.courses = this.filterPipe.transform(this.courses, this.searchInput);
  }

  public addCourse(): void {
    console.log('Add course');
  }

  public loadMore(): void {
    this.courses.length
    console.log('Load more');
  }

  public deleteCourse(course: any): void {
    console.log('Delete ' + course.id);
  }

  public editCourse(course: any): void {
    console.log('Edit ' + course.id);
  }
}
