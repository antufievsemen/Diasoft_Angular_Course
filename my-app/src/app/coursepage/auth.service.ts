import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = '/users';
  user: Subject<User> = new Subject<User>();

  constructor(private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {
  }

  public login(user: User): Observable<User[]> {
    this.loadingService.setState(true);
    const res = this.httpClient.get<User[]>(`${this.apiUrl}?email=${user.email}&password=${user.password}`);
    this.loadingService.setState(false);
    return res;
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public setUserInfo(user: User): void {
      this.user.next(user);
  }

  public getUserInfo(): Subject<User> {
    // return this.httpClient.get<User[]>(`${this.apiUrl}?fakeToken`);
    return this.user;
  }
}
