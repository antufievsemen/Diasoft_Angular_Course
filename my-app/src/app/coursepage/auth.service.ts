import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
  }

  public login(user: User): void {
    localStorage.setItem('auth-email', user.email);
    localStorage.setItem('auth-password', user.password);
  }

  public logout(): void {
    localStorage.removeItem('auth-email');
    localStorage.removeItem('auth-password');
  }

  public isAuthenticated(): boolean {
    return !!(localStorage.getItem('auth-email') && localStorage.getItem('auth-password'));
  }

  public getUserInfo(): User | undefined {
    return {email: localStorage.getItem('auth-email'), password: localStorage.getItem('auth-password')} as User;
  }
}
