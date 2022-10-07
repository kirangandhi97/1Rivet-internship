import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsDeleteComponent } from './students-delete/students-delete.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    StudentsDeleteComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
