import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AuthState } from '../store/courses/reducers/auth-reducer.reducer';
import { CoursesState } from '../store/courses/reducers/courses-reducer.reducer';
import { selectIsAuthLoading } from '../store/courses/selectors/auth-selectors.selectors';
import { selectIsCoursesLoading } from '../store/courses/selectors/courses-selectors.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private authStore: Store<AuthState>,
    private storeCourses: Store<CoursesState>
  ) { }

  public getState(): Observable<boolean> {
    return this.authStore.select(selectIsAuthLoading) || this.storeCourses.select(selectIsCoursesLoading);;
  }
}
