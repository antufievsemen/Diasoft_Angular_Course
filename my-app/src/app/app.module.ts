import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coursepage/header/header.component';
import { LogoComponent } from './coursepage/logo/logo.component';
import { FooterComponent } from './coursepage/footer/footer.component';
import { BreadcrumbsComponent } from './coursepage/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './coursepage/course/course.module';
import { LoginModule } from './coursepage/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    PanelModule,
    FormsModule,
    CourseModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
