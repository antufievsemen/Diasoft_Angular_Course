import { Component } from '@angular/core';
import { AuthService } from './coursepage/auth.service';
import { User } from './domain/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService,
    private router: Router
  ){}

  public isAuthenticated() : boolean {
    return this.authService.isAuthenticated();
  }

  public login(user: User) {
    if (!this.authService.isAuthenticated()) {
      this.authService.login(user);
      this.router.navigate(['courses']);
    }
  }
}
