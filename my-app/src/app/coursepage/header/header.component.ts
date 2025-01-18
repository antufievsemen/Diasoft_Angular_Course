import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User = { firstName: 'Igor' } as User;

  public openProfile(): void {
    console.log('Open profile' + this.user.firstName);
  }

  public logOut(): void {
    console.log('Log out');
  }
}
