import { AfterViewChecked, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/courses/reducers/auth-reducer.reducer';
import { logout } from 'src/app/store/courses/actions/auth-actions.actions';

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
    private store: Store<AuthState>) {
  }

  ngOnDestroy(): void {
    this.userInfo$?.unsubscribe();
  }

  ngOnInit(): void {
    this.userInfo$ = this.authService.getUserInfo().subscribe(data => {
      if (data && data.firstName)
        this.displayName = data.firstName + ' ' + data.lastName
    });
  }

  public openProfile(): void {
  }

  public logout(): void {
    this.store.dispatch(logout());
  }

  public isAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }
}
