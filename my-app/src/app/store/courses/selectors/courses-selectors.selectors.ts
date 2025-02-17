import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../reducers/courses-reducer.reducer'

export const selectCoursesState = createFeatureSelector<reducer.CoursesState>(reducer.coursesReducerFeatureKey);

export const selectIsCoursesLoading = createSelector(
    selectCoursesState,
    (state) => state.isLoading
);

export const selectCourses = createSelector(
    selectCoursesState,
    (state) => state.courses
);

export const selectCoursesSize = createSelector(
    selectCourses,
    (courses) => courses.length
)

export const selectCourseId = createSelector(
    selectCoursesState,
    (state) => state.courseId
)

