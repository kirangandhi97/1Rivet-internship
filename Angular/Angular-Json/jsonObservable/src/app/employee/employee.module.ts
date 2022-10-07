import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { AlphabetOnlyDirective } from './alphabet-only.directive';




@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AlphabetOnlyDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports: [
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  providers:[
    // EmployeeService
  ]
})
export class EmployeeModule { }
