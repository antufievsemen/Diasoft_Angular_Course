import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../reducers/auth-reducer.reducer'

export const selectAuthState = createFeatureSelector<reducer.AuthState>(reducer.authReducerFeatureKey);

export const selectIsAuthLoading = createSelector(
    selectAuthState,
    (state) => state.isLoading
);

export const selectUser = createSelector(
    selectAuthState,
    (state) => state.user
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (courses) => courses.isAuthenticated
);

