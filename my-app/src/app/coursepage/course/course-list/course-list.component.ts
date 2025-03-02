import { Component, OnInit, Optional } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { FilterPipe } from './pipe/filter.pipe';
import { CourseService } from '../course.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrderByPipe } from 'src/app/shared/pipe/order-by.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [MessageService, ConfirmationService, OrderByPipe, FilterPipe]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchInput: string = '';

  constructor(private orderPipe: OrderByPipe,
    private filterPipe: FilterPipe,
    private courseService: CourseService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
    this.courses = this.courseService.getList();
    this.courses = this.orderPipe.transform(this.courses, 'creationDate');
  }

  public search(): void {
    this.courses = this.filterPipe.transform(this.courses, this.searchInput);
  }

  public addCourse(): void {
    this.router.navigate(['courses', 'new'])
  }

  public loadMore(): void {
    console.log('Load more');
  }

  public deleteCourse(course: Course): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this course?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      closeOnEscape: true,
      accept: () => {
        this.courseService.remove(course);
        this.courses = this.courseService.getList();
      },
      reject: () => {
        console.log('Delete action was rejected');
      }
    });

  }

  public editCourse(course: Course): void {
    this.router.navigate(['courses/', course.id])
  }
}


