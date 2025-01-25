import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined = undefined;

  constructor() { 
  }

  public login(user: User): void {
    this.user = user;
  }

  public logout(): void {
    this.user = undefined;
  }

  public isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  public getUserInfo(): User | undefined {
    return this.user;
  }
}
