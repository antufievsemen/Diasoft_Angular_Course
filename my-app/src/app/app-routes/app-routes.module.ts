import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CourseListComponent } from '../coursepage/course/course-list/course-list.component';


const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('../coursepage/course/course.module').then(m => m.CourseModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full', },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
