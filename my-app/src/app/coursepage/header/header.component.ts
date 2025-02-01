import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from 'src/app/domain/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User | undefined = undefined;

  constructor(
    private authService: AuthService) {
  }

  public openProfile(): void {
    console.log('Open profile' + this.authService.getUserInfo()?.firstName);
  }

  public logout(): void {
      this.authService.logout();
  }
}
