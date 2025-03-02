import { Component } from '@angular/core';
import { User } from './domain/user';
import { AuthState } from './store/courses/reducers/auth-reducer.reducer';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectIsAuthLoading } from './store/courses/selectors/auth-selectors.selectors';
import { Observable } from 'rxjs';
import { login } from './store/courses/actions/auth-actions.actions';
import { CoursesState } from './store/courses/reducers/courses-reducer.reducer';
import { selectIsCoursesLoading } from './store/courses/selectors/courses-selectors.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authStore: Store<AuthState>,
    private storeCourses: Store<CoursesState>
  ) { }

  public isAuthenticated(): Observable<boolean> {
    return this.authStore.select(selectIsAuthenticated);
  }

  public login(user: User): void {
    this.authStore.dispatch(login({ user }));
  }

  public isLoad(): Observable<boolean> {
    return this.authStore.select(selectIsAuthLoading) || this.storeCourses.select(selectIsCoursesLoading);
  }
}
