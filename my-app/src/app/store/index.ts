import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import * as courseReducer from './courses/reducers/courses-reducer.reducer'
import * as authReducer from './courses/reducers/auth-reducer.reducer'
import * as routerStore from '@ngrx/router-store'

export const selectRouter = createFeatureSelector<routerStore.RouterReducerState<any>>('router');

export const {
  selectCurrentRoute,
  selectQueryParam,
  selectQueryParams,
  selectRouteDataParam,
  selectRouteData,
  selectUrl,
  selectRouteParams,
  selectRouteParam
} = routerStore.getRouterSelectors(selectRouter);

export interface AppState {
  [courseReducer.coursesReducerFeatureKey]: courseReducer.CoursesState,
  [authReducer.authReducerFeatureKey]: authReducer.AuthState,
  router: routerStore.RouterReducerState<any>,
}

export const reducers: ActionReducerMap<AppState> = {
  [courseReducer.coursesReducerFeatureKey]: courseReducer.reducer,
  [authReducer.authReducerFeatureKey]: authReducer.reducer,
  router: routerStore.routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
