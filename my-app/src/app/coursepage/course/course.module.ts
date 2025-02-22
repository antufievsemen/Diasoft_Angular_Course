import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FilterPipe } from './course-list/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CourseRouteModule } from './course-route/course-route.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AuthorsService } from './authors/authors.service';
import { CourseService } from './course.service';



@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    DurationPipe,
    HighlighterDirective,
    OrderByPipe,
    CalendarModule,
    InputNumberModule,
    CourseRouteModule,
    RouterModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    FilterPipe,
    CourseAddComponent,
    AuthorsComponent,
    CourseEditComponent,
    BreadcrumbsComponent
  ],
  providers: [
    {provide: CourseService, useClass: CourseService},
    {provide: AuthorsService, useClass: AuthorsService}
  ]
})
export class CourseModule { }
