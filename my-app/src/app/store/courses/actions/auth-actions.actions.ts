import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/domain/user';

export const login = createAction(
  '[Auth] Login',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: any}>()
);

export const logout = createAction(
  '[Auth] Logout',
);

export const logoutSuccess = createAction(
  '[Auth] Logout Success',
);

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{error: any}>()
);
