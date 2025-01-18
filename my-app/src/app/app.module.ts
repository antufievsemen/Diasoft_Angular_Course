import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './coursepage/header/header.component';
import { LogoComponent } from './coursepage/logo/logo.component';
import { FooterComponent } from './coursepage/footer/footer.component';
import { CourseItemComponent } from './coursepage/course-item/course-item.component';
import { CourseListComponent } from './coursepage/course-list/course-list.component';
import { CoursesheaderComponent } from './coursepage/coursesheader/coursesheader.component';
import { BreadcrumbsComponent } from './coursepage/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CourseItemComponent,
    CourseListComponent,
    CoursesheaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    PanelModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
