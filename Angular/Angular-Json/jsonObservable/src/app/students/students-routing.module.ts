import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: 'add',
        component: StudentsComponent
      },
      {
        path: 'edit/:id',
        component: StudentsComponent
      },
      {
        path: 'delete/:id',
        component: StudentsComponent
      },
      {
        path: 'details/:id',
        component: StudentsDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
