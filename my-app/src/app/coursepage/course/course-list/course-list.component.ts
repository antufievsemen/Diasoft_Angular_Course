import { Component, OnInit, Optional } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { FilterPipe } from './pipe/filter.pipe';
import { CourseService } from '../course.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrderByPipe } from 'src/app/shared/pipe/order-by.pipe';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, Subject, Subscriber, switchMap, take, takeUntil, throttleTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectCourses } from 'src/app/store/courses/selectors/courses-selectors.selectors';
import { deleteCourse, getCourses } from 'src/app/store/courses/actions/courses-actions.actions';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [OrderByPipe, FilterPipe]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchInput: string = '';
  limit: number = 10;

  constructor(private orderPipe: OrderByPipe,
    private filterPipe: FilterPipe,
    private courseService: CourseService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private readonly store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.select(selectCourses).subscribe(data => {
      this.courses = this.orderPipe.transform(data, 'creationDate');
    });
    this.store.dispatch(getCourses({size: 5}));
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
    this.store.dispatch(getCourses({}));
  }

  public deleteCourse(course: Course): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this course?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      closeOnEscape: true,
      accept: () => {
        this.store.dispatch(deleteCourse({course}));
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


