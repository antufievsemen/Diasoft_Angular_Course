import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output()
  auth: EventEmitter<User> = new EventEmitter<User>();

  public constructor(
  ) { }

  public login(myForm: any): void {
    this.auth.emit({ email: myForm.value.email, password: myForm.value.password } as User)
  }
}
