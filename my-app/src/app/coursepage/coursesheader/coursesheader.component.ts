import { Component } from '@angular/core';

@Component({
  selector: 'app-coursesheader',
  templateUrl: './coursesheader.component.html',
  styleUrls: ['./coursesheader.component.scss']
})
export class CoursesheaderComponent {
  searchInput: string = '';

  public search(): void {
    console.log('Search' + this.searchInput);
  }

  public addCourse(): void {
    console.log('Add course');
  }
}
