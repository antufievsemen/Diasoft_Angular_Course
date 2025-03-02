import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/auth-actions.actions'
import { catchError, map, of, switchMap, take, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/coursepage/auth.service';
import { AuthState } from '../reducers/auth-reducer.reducer';

@Injectable()
export class AuthEffects {

  public loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.login),
    switchMap(({ user }) => this.authService.login(user).pipe(
      map(() => actions.loginSuccess(),
        catchError((error) => of(actions.loginFailure({ error }))))
    ))
  ));

  public logoutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(actions.logout),
    switchMap(() => this.authService.logout().pipe(
      // tap(() => localStorage.clear()),
      map(() => actions.logoutSuccess(),
        catchError((error) => of(actions.loginFailure({ error }))))
    ))
  ));

  public getCoursesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loginSuccess, actions.logoutSuccess),
    tap(() => console.log('Action is success'))
  ), { dispatch: false });

  public getCoursesFailure$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loginFailure, actions.logoutFailure),
    tap(() => console.log('Action is failure'))
  ), { dispatch: false });

  constructor(private actions$: Actions,
    private readonly authService: AuthService,
    private readonly store: Store<AuthState>
  ) { }
}
