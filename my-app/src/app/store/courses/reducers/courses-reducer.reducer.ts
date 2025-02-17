import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/domain/course';
import * as coursesActions from '../actions/courses-actions.actions';
import { state } from '@angular/animations';

export const coursesReducerFeatureKey = 'courses';

export interface CoursesState {
  isLoading: boolean;
  courses: Course[];
  courseId: number | null;
}

export const initialState: CoursesState = {
  isLoading: false,
  courses: [],
  courseId: null
};

export const reducer = createReducer(
  initialState,
  on(coursesActions.getCourses, (state) => ({ ...state, isLoading: true })),
  on(coursesActions.getCoursesSuccess, (state, { data }) => ({ ...state, courses: data, isLoading: false })),
  on(coursesActions.getCoursesFailure, (state) => ({ ...state, isLoading: false })),

  on(coursesActions.addCourse, (state) => ({ ...state, isLoading: true })),
  on(coursesActions.addCourseSuccess, (state) => ({ ...state, isLoading: false })),
  on(coursesActions.addCourseFailure, (state) => ({ ...state, isLoading: false })),

  on(coursesActions.editCourse, (state, { course }) => ({ ...state, courseId: course.id, isLoading: true })),
  on(coursesActions.editCourseSuccess, (state) => ({ ...state, courseId: null, isLoading: false })),
  on(coursesActions.editCourseFailure, (state) => ({ ...state, courseId: null, isLoading: false })),

  on(coursesActions.deleteCourse, (state, { course }) => ({ ...state, courseId: course.id, isLoading: true })),
  on(coursesActions.deleteCourseSuccess, (state) => ({ ...state, courseId: null, isLoading: false })),
  on(coursesActions.deleteCourseFailure, (state) => ({ ...state, courseId: null, isLoading: false })),
);

