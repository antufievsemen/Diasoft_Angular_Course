import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Course } from 'src/app/domain/course';

@Injectable()
export class CourseService {
  private readonly apiUrl = '/videocourses';

  constructor(private readonly httpClient: HttpClient,
  ) {
  }

  public getList(count: number = 5): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}?_start=0&_limit=${count}`);
  }

  public createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.apiUrl}`, course);
  }

  public getItemById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.apiUrl}/${id}`);
  }

  public update(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  public remove(course: Course): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${course.id}`);
  }

  public filterCourses(search: string): Observable<Course[]> {
    let res;
    if (search == '') {
      res = this.getList();
    } else {
      res = this.httpClient.get<Course[]>(`${this.apiUrl}?q=${search}`);
    }
    return res
  }
}
