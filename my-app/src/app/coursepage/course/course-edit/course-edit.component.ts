import { Component, Input, OnInit } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  displayName: string = '';
  description: string = '';
  duration: number = 0;
  creationDate: Date = new Date();
  id: number = -1;

  public constructor(
    private courseService: CourseService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id = data['id'];
      let course = this.courseService.getItemById(this.id);
      if (course) {
        this.displayName = course.title;
        this.creationDate = course.creationDate;
        this.description = course.description;
        this.duration = course.duration;
      }
    });
  }


  public cancel(): void { 
    this.router.navigate(['courses']);
  }

  public save(): void {
    this.courseService.update({
      id: this.id,
      title: this.displayName,
      creationDate: this.creationDate,
      duration: this.duration,
      description: this.description,
      topRated: false
    });
    this.router.navigate(['courses']);
  }
}
