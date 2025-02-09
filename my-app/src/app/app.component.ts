import { Component } from '@angular/core';
import { AuthService } from './coursepage/auth.service';
import { User } from './domain/user';
import { Router } from '@angular/router';
import { LoadingService } from './loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public login(user: User) {
    if (!this.authService.isAuthenticated()) {
      this.authService.login(user).subscribe(data => {
        if (data && data[0]) {
          localStorage.setItem('token', data[0].fakeToken);
          this.authService.setUserInfo(data[0]);
          this.router.navigate(['courses']);
        }
      });

    }
  }

  public isLoad() : boolean{
    return this.loadingService.getState();
  }
}
