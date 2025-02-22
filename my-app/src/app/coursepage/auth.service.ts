import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/courses/reducers/auth-reducer.reducer';
import { selectIsAuthenticated } from '../store/courses/selectors/auth-selectors.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = '/users';
  user: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient,
    private router: Router,
    private authStore: Store<AuthState>
  ) {
  }

  public login(user: User): Observable<any> {
    this.httpClient.get<User[]>(`${this.apiUrl}?email=${user.email}&password=${user.password}`)
      .subscribe(data => {
        if (data && data[0]) {
          localStorage.setItem('token', data[0].fakeToken);
          this.setUserInfo(data[0]);
          this.router.navigate(['courses']);
        }
      });
    return of(user);
  }

  public logout(): Observable<any> {
    localStorage.clear();
    this.router.navigate(['']);
    return of(1);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.authStore.select(selectIsAuthenticated);
  }

  public setUserInfo(user: User): void {
    this.user.next(user);
  }

  public getUserInfo(): Subject<User> {
    return this.user;
  }
}
