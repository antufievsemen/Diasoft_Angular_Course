import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { LoadingService } from 'src/app/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = '/videocourses';

  constructor(private readonly httpClient: HttpClient,
    private loadingService: LoadingService
  ) {
  }

  public getList(count: number = 5): Observable<Course[]> {
    this.loadingService.setState(true);
    const res = this.httpClient.get<Course[]>(`${this.apiUrl}/?_start=0&_limit=${count}`);
    this.loadingService.setState(false);
    return res;
  }

  public createCourse(course: Course): Observable<Course> {
    this.loadingService.setState(true);
    const res =  this.httpClient.post<Course>(`${this.apiUrl}`, course);
    this.loadingService.setState(false);
    return res;
  }

  public getItemById(id: number): Observable<Course> {
    this.loadingService.setState(true);
    const res =  this.httpClient.get<Course>(`${this.apiUrl}/${id}`);
    this.loadingService.setState(false);
    return res;
  }

  public update(course: Course): Observable<Course> {
    this.loadingService.setState(true);
    const res =  this.httpClient.put<Course>(`${this.apiUrl}/${course.id}`, course);
    this.loadingService.setState(false);
    return res;
  }

  public remove(course: Course): Observable<any> {
    this.loadingService.setState(true);
    const res =  this.httpClient.delete(`${this.apiUrl}/${course.id}`);
    this.loadingService.setState(false);
    return res;
  }

  public filterCourses(search: string): Observable<Course[]> {
    this.loadingService.setState(true);
    let res;
    if (search == '') {
      res =  this.getList();  
    } else {
      res =  this.httpClient.get<Course[]>(`${this.apiUrl}?q=${search}`);
    }
    this.loadingService.setState(false);
    return res
  }
}
