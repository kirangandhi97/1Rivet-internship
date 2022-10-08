import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'student-list',
      },
      {
        path: 'student-form',
        component: StudentsFormComponent,
      },
      {
        path:'student-list',
        component:StudentsListComponent,
      },
      {
        path: 'student-edit/:id',
        component: StudentsFormComponent,
      },
      {
        path: 'delete/:id',
        component: StudentsListComponent,
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
