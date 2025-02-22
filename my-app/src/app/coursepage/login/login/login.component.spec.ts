import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/domain/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  const { build } = setup<LoginComponent>();
  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit user on login', () => {
    const user = { email: 'fake@mail.ru', password: 'fakePassword' } as User;

    spyOn(component.auth, 'emit');
    component.login({ value: user });
    expect(component.auth.emit).toHaveBeenCalledOnceWith({email: 'fake@mail.ru', password: 'fakePassword'} as User);
  });
});

function setup<T>(): { default: () => any; build: () => T;[key: string]: any } {
  const builder = {
    default(): any {
      return builder;
    },
    build(): any {
      return new LoginComponent();
    }
  };
  return builder;
}
