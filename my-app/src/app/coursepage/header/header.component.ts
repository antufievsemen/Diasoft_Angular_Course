import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  displayName: string = 'none';

  constructor(
    private authService: AuthService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(user => {
      if (user.firstName) {
        this.displayName = user.firstName + ' ' + user.lastName;
      }
    })
  }

  public openProfile(): void {
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
