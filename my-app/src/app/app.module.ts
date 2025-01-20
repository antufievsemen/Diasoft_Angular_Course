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
import { BreadcrumbsComponent } from './coursepage/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { HighlighterDirective } from './coursepage/course-item/directive/highlighter.directive';
import { TitleCasePipe } from '@angular/common';
import { DurationPipe } from './coursepage/course-item/pipe/duration.pipe';
import { OrderByPipe } from './coursepage/course-list/pipe/order-by.pipe';
import { FilterPipe } from './coursepage/course-list/pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CourseItemComponent,
    CourseListComponent,
    BreadcrumbsComponent,
    HighlighterDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
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
