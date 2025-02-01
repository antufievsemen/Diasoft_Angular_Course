import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Course } from 'src/app/domain/course';

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

  public cancel(): void {}

  public add(): void {
    
  }
}
