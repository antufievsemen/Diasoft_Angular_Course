import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./coursepage/course/course.module').then(m => m.CourseModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full', },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
