import { MockStore, createMockStore, getMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { AuthState } from './store/courses/reducers/auth-reducer.reducer';
import { CoursesState } from './store/courses/reducers/courses-reducer.reducer';
import { selectIsAuthenticated, selectIsAuthLoading } from './store/courses/selectors/auth-selectors.selectors';
import { User } from './domain/user';
import { login } from './store/courses/actions/auth-actions.actions';
import { selectIsCoursesLoading } from './store/courses/selectors/courses-selectors.selectors';

describe('AppComponent', () => {
  let component: AppComponent;
  const { build, authStore, coursesStore } = setup<AppComponent>();
  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud select isLoading', () => {
    spyOn(authStore, 'select')
    spyOn(coursesStore, 'select')

    component.isLoad();

    expect(authStore.select).toHaveBeenCalledOnceWith(selectIsAuthLoading);
    expect(coursesStore.select).toHaveBeenCalledOnceWith(selectIsCoursesLoading);
  })

  it('shoud select isAuthenticated', () => {
    spyOn(authStore, 'select')

    component.isAuthenticated();

    expect(authStore.select).toHaveBeenCalledOnceWith(selectIsAuthenticated)
  })

  it('shoud dispatch action login', () => {
    spyOn(authStore, 'dispatch')

    component.login({} as User);
    const user = {} as User;
    expect(authStore.dispatch).toHaveBeenCalledOnceWith(login({user}))
  })

});

function setup<T>(): { default: () => any; build: () => T; authStore: MockStore<AuthState>, coursesStore: MockStore<CoursesState>, [key: string]: any } {
  const initAuth = { user: undefined, isAuthenticated: false, isLoading: false } as unknown as AuthState;
  const initCourses = { isLoading: false, courses: [], courseId: null } as unknown as CoursesState;
  const authStore: MockStore<AuthState> = createMockStore({ initialState: initAuth })
  const coursesStore: MockStore<CoursesState> = createMockStore({ initialState: initCourses })
  const builder = {
    authStore,
    coursesStore,
    default(): any {
      return builder;
    },
    build(): any {
      return new AppComponent(authStore, coursesStore);
    }
  };
  return builder;
}