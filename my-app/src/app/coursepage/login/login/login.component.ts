import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  @Output()
  auth: EventEmitter<User> = new EventEmitter<User>();

  public constructor(
    private authService: AuthService
  ) { }

  public login(): void {
    this.auth.emit({ email: this.email, password: this.password } as User)
  }
}
