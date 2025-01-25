import { Component } from '@angular/core';
import { AuthService } from './coursepage/auth.service';
import { User } from './domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService){}

  public isAuthenticated() : boolean {
    return this.authService.isAuthenticated();
  }

  public login(user: User) {
    if (!this.authService.isAuthenticated()) {
      this.authService.login(user);
    }
  }
}
