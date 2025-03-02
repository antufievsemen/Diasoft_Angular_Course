import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FilterPipe } from './course-list/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DurationPipe } from 'src/app/shared/pipe/duration.pipe';
import { HighlighterDirective } from 'src/app/shared/directive/highlighter.directive';
import { OrderByPipe } from 'src/app/shared/pipe/order-by.pipe';
import { CourseAddComponent } from './course-add/course-add.component';
import { AuthorsComponent } from './authors/authors.component';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CourseRouteModule } from './course-route.module';
import { CourseComponent } from './course.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    FilterPipe,
    CourseAddComponent,
    AuthorsComponent,
    CourseEditComponent,
    BreadcrumbsComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    DurationPipe,
    HighlighterDirective,
    OrderByPipe,
    CalendarModule,
    InputNumberModule,
    CourseRouteModule,
    RouterModule
  ],
})
export class CourseModule { }
