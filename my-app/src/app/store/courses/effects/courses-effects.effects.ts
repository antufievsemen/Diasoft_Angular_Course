import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/courses-actions.actions'
import { CourseService } from 'src/app/coursepage/course/course.service';
import { catchError, map, of, switchMap, take, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { CoursesState } from '../reducers/courses-reducer.reducer';
import { selectCoursesSize } from '../selectors/courses-selectors.selectors';

@Injectable()
export class CoursesEffects {
  public getCoursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getCourses, actions.deleteCourseSuccess),
    withLatestFrom(this.store.select(selectCoursesSize)),
    switchMap(([{ size }, limit]) => this.courseService.getList(size || limit + 5).pipe(
      map((data) => actions.getCoursesSuccess({ data }),
        catchError((error) => of(actions.getCoursesFailure({ error }))))
    ))
  ));

  public addCoursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.addCourse),
    switchMap(({ course }) => this.courseService.createCourse(course).pipe(
      map(() => actions.addCourseSuccess(),
        catchError((error) => of(actions.addCourseFailure({ error }))))
    ))
  ));

  public updateCoursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.editCourse),
    switchMap(({ course }) => this.courseService.update(course).pipe(
      map(() => actions.editCourseSuccess(),
        catchError((error) => of(actions.editCourseFailure({ error }))))
    ))
  ));

  public deleteCoursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.deleteCourse),
    switchMap(({ course }) => this.courseService.remove(course).pipe(
      withLatestFrom(this.store.select(selectCoursesSize)),
      map(([_, size]) => actions.deleteCourseSuccess( {size}),
        catchError((error) => of(actions.deleteCourseFailure({ error }))))
    ))
  ));

  public getCoursesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getCoursesSuccess, actions.addCourseSuccess, actions.editCourseSuccess, actions.deleteCourseSuccess),
    tap(() => console.log('Action is success'))
  ), { dispatch: false });

  public getCoursesFailure$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getCoursesFailure, actions.addCourseFailure, actions.editCourseFailure, actions.deleteCourseFailure),
    tap(() => console.log('Action is failure'))
  ), { dispatch: false });

  constructor(private actions$: Actions,
    private readonly courseService: CourseService,
    private readonly store: Store<CoursesState>
  ) { }
}
