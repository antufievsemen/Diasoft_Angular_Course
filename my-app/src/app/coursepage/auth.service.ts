import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = '/users';

  constructor(private httpClient: HttpClient) {
  }

  public login(user: User): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}?email=${user.email}&password=${user.password}`);
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public getUserInfo(): Observable<User> {
    // return this.httpClient.get<User[]>(`${this.apiUrl}?fakeToken`);
    return this.httpClient.get<User>(`${this.apiUrl}?fakeToken=${localStorage.getItem('token')}`);
  }
}
