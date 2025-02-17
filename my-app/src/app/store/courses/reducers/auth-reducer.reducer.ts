import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/domain/course';
import { User } from 'src/app/domain/user';
import * as actions from '../actions/auth-actions.actions'

export const authReducerFeatureKey = 'auth';

export interface AuthState {
  user?: User,
  isAuthenticated: boolean,
  isLoading: boolean
}

export const initialState: AuthState = {
  user: undefined,
  isAuthenticated: false,
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(actions.login, (state, {user}) => ({ ...state, user: user, isLoading: true})),
  on(actions.loginSuccess, (state) => ({ ...state, isAuthenticated: true, isLoading: false})),
  on(actions.loginFailure, (state) => ({ ...state, user: undefined, isLoading: false})),

  on(actions.logout, (state) => ({ ...state, user: undefined, isLoading: true})),
  on(actions.logoutSuccess, (state) => ({ ...state, isAuthenticated: false, isLoading: false})),
  on(actions.logoutFailure, (state) => ({ ...state, isLoading: false})),
);

