import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from 'src/app/domain/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  public openProfile(): void {
    console.log('Open profile' + this.authService.getUserInfo()?.firstName);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public getDisplayName(): string {
    const userInfo = this.authService.getUserInfo();
    return userInfo?.firstName ? userInfo.firstName : 'none';
  }
}
