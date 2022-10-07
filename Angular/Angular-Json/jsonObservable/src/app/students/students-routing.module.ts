import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'student-form',
      },
      {
        path: 'student-form',
        component: StudentsFormComponent,
      },
      {
        path: 'student-edit/:id',
        component: StudentsFormComponent,
      },
      {
        path: 'delete/:id',
        component: StudentsFormComponent,
      },
      {
        path: 'student-details/:id',
        component: StudentsDetailsComponent,
      },
    ],
  },
  // {
  //   path: '',
  //   component: StudentsComponent,
  //   children: [
  //     {
  //       path: 'add',
  //       component: StudentsFormComponent
  //     },
  //     {
  //       path: 'edit/:id',
  //       component: StudentsFormComponent
  //     },
  //     {
  //       path: 'delete/:id',
  //       component: StudentsFormComponent
  //     },
  //     {
  //       path: 'details',
  //       component: StudentsDetailsComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
