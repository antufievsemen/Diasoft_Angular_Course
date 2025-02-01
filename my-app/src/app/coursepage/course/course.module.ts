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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DurationPipe } from 'src/app/shared/pipe/duration.pipe';
import { HighlighterDirective } from 'src/app/shared/directive/highlighter.directive';
import { OrderByPipe } from 'src/app/shared/pipe/order-by.pipe';
import { CourseAddComponent } from './course-add/course-add.component';
import { AuthorsComponent } from './authors/authors.component';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    FilterPipe,
    CourseAddComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    DurationPipe,
    HighlighterDirective,
    OrderByPipe,
    CalendarModule,
    InputNumberModule
  ],
  exports: [
    CourseListComponent,
    CourseItemComponent
  ]
})
export class CourseModule { }
