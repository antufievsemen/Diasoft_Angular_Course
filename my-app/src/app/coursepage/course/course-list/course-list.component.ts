import { Component, OnInit, Optional } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { FilterPipe } from './pipe/filter.pipe';
import { CourseService } from '../course.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrderByPipe } from 'src/app/shared/pipe/order-by.pipe';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, Subject, Subscriber, switchMap, take, takeUntil, throttleTime } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [OrderByPipe, FilterPipe]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  private search$: Subject<Course[]> = new Subject<Course[]>();
  searchInput: string = '';
  limit: number = 10;

  constructor(private orderPipe: OrderByPipe,
    private filterPipe: FilterPipe,
    private courseService: CourseService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
    this.courseService.getList().subscribe(data => {
      this.courses = this.orderPipe.transform(data, 'creationDate');
    });
  }

  public search(): void {
    of(this.searchInput).pipe(
      debounceTime(250),
      filter(text => !!text && text.length >= 3),
      distinctUntilChanged(),
      switchMap((value) => this.courseService.filterCourses(value)),
    ).subscribe(data => {
      this.courses = this.orderPipe.transform(data, 'creationDate');
    })

  }

  public navigateAddCourse(): void {
    this.router.navigate(['courses', 'new'])
  }

  public loadMore(): void {
    this.courseService.getList(this.limit).subscribe(data => {
      this.courses = this.orderPipe.transform(data, 'creationDate');
    });
    this.limit = this.limit + 5;
  }

  public deleteCourse(course: Course): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this course?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      closeOnEscape: true,
      accept: () => {
        this.courseService.remove(course).pipe(take(1)).subscribe();
        this.courses = this.courses.filter(c => c.id != course.id)
      },
      reject: () => {
        console.log('Delete action was rejected');
      }
    });
  }

  public navigateEditCourse(course: Course): void {
    this.router.navigate(['courses/', course.id])
  }
}


