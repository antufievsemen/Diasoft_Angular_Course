import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from '../course.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent {
  displayName: string = '';
  description: string = '';
  duration: number = 0;
  creationDate: Date = new Date();

  public constructor(private router: Router,
    private courseService: CourseService
  ) { }

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public add(): void {
    this.courseService.createCourse({
      title: this.displayName,
      creationDate: this.creationDate,
      duration: this.duration,
      description: this.description,
      topRated: false
    } as Course).pipe(take(1)).subscribe();
    this.router.navigate(['courses']);
  }
}
