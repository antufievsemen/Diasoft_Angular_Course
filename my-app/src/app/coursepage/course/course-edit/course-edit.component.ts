import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  private id: number = 0;
  public editCourseForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    creationDate: [new Date(), Validators.required],
    duration: [0, [Validators.required]],
    authors: [[], [Validators.required]]
  })

  public constructor(
    private courseService: CourseService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public get duration(): FormControl {
    return this.editCourseForm.get('duration') as FormControl;
  }

  public get title(): FormControl {
    return this.editCourseForm.get('title') as FormControl;
  }

  public get description(): FormControl {
    return this.editCourseForm.get('description') as FormControl;
  }

  public get creationDate(): FormControl {
    return this.editCourseForm.get('creationDate') as FormControl;
  }

  public get authors(): FormControl {
    return this.editCourseForm.get('authors') as FormControl;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = data['id'];
      this.courseService.getItemById(this.id).subscribe(course => {
        this.title.patchValue(course.title);
        this.creationDate.patchValue(new Date(course.creationDate));
        this.description.patchValue(course.description);
        this.duration.patchValue(course.duration);
        this.authors.patchValue(course.authors);
      });
    });
  }


  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public edit(): void {
    this.courseService.update({
      id: this.id,
      title: this.title.value,
      creationDate: this.creationDate.value,
      duration: this.duration.value,
      description: this.description.value,
      authors: this.authors.value
    }).pipe(take(1)).subscribe();
    this.router.navigate(['courses']);
  }
}
