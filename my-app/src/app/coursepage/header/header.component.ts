import { AfterViewChecked, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public displayName: string = '';
  public userInfo$: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnDestroy(): void {
    this.userInfo$?.unsubscribe();
  }

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo().subscribe(data => { 
      if (data && data.firstName)
      this.displayName = data.firstName + ' ' + data.lastName });
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
