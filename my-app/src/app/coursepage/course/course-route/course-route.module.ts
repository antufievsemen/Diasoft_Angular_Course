import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CourseAddComponent } from '../course-add/course-add.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { AuthService } from '../../auth.service';

const canActivateCourse: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).isAuthenticated();
}

const routes2: Routes = [
  { path: '', component: CourseListComponent, canActivate: [canActivateCourse] },
  { path: 'new', component: CourseAddComponent, canActivate: [canActivateCourse] },
  { path: ':id', component: CourseEditComponent, canActivate: [canActivateCourse] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes2),
  ],
  exports: [RouterModule]
})
export class CourseRouteModule { }
