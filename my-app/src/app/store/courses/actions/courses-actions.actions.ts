import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/domain/course';

export const getCourses = createAction(
  '[Courses] Get Courses',
  props<{ size?: number }>()
);

export const getCoursesSuccess = createAction(
  '[Courses] Get Courses Success',
  props<{ data: Course[] }>()
);

export const getCoursesFailure = createAction(
  '[Courses] Get Courses Failure',
  props<{ error: any }>()
);

export const editCourse = createAction(
  '[Courses] Edit Courses',
  props<{ course: Course }>()
);

export const editCourseSuccess = createAction(
  '[Courses] Edit Courses Success',
);

export const editCourseFailure = createAction(
  '[Courses] Edit Courses Failure',
  props<{ error: any }>()
);

export const addCourse = createAction(
  '[Courses] Add Courses',
  props<{ course: Course }>()
);

export const addCourseSuccess = createAction(
  '[Courses] Add Courses Success');

export const addCourseFailure = createAction(
  '[Courses] Add Courses Failure',
  props<{ error: any }>()
);

export const deleteCourse = createAction(
  '[Courses] Delete Courses',
  props<{ course: Course }>()
);

export const deleteCourseSuccess = createAction(
  '[Courses] Delete Courses Success',
  props<{size: number}>()
);

export const deleteCourseFailure = createAction(
  '[Courses] Delete Courses Failure',
  props<{ error: any }>()
);


