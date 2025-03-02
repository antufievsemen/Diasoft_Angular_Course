import { Component, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User | undefined = undefined;

  constructor(
    private authService: AuthService) {
  }
  ngOnInit(): void {
    this.user = this.authService.getUserInfo();
  }

  public openProfile(): void {
    console.log('Open profile' + this.authService.getUserInfo()?.firstName);
  }

  public logout(): void {
      this.authService.logout();
  }
}
