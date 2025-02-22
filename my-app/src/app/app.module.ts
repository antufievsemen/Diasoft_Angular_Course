import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './coursepage/header/header.component';
import { LogoComponent } from './coursepage/logo/logo.component';
import { FooterComponent } from './coursepage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './coursepage/login/login.module';
import { APP_BASE_HREF } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpTokenInterceptor } from './coursepage/httptokeninterceptor.service';
import { LoadingComponent } from './loading/loading.component';
import { HttpErrorInterceptor } from './coursepage/httperrorinterceptor.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';
import { environment } from './environments/environmet';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/courses/effects/courses-effects.effects';
import { CourseService } from './coursepage/course/course.service';
import { AuthEffects } from './store/courses/effects/auth-effects.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    LoginModule,
    AppRoutesModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    StoreModule.forRoot(fromState.reducers, { metaReducers: fromState.metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    EffectsModule.forRoot([CoursesEffects, AuthEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  { provide: MessageService, useClass: MessageService },
  { provide: ConfirmationService, useClass: ConfirmationService },
  { provide: CourseService, useClass: CourseService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
