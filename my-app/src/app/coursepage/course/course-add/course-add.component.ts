import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/domain/author';
import { Store } from '@ngrx/store';
import { CoursesState } from 'src/app/store/courses/reducers/courses-reducer.reducer';
import { addCourse } from 'src/app/store/courses/actions/courses-actions.actions';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent implements OnInit {

  public addCourseForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    creationDate: [new Date(), [Validators.required]],
    duration: [0, [Validators.required]],
    authors: [[] as Author[], [Validators.required]],
  })

  public get duration(): FormControl {
    return this.addCourseForm.get('duration') as FormControl;
  }

  public get title(): FormControl {
    return this.addCourseForm.get('title') as FormControl;
  }

  public get description(): FormControl {
    return this.addCourseForm.get('description') as FormControl;
  }

  public get creationDate(): FormControl {
    return this.addCourseForm.get('creationDate') as FormControl;
  }

  public get authors(): FormControl {
    return this.addCourseForm.get('authors') as FormControl;
  }

  public constructor(private router: Router,
    private fb: FormBuilder,
    private readonly store: Store<CoursesState>
  ) { }

  ngOnInit(): void {

  }

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public add(): void {
    const course = {
      title: this.title.value,
      creationDate: this.creationDate.value,
      duration: this.duration.value,
      description: this.description.value,
      authors: this.authors.value,
    } as Course;
    this.store.dispatch(addCourse({ course }));
    this.router.navigate(['courses']);
  }
}
