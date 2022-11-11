import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/employee/employee.model';

@Injectable()
export class DataSharingService {
public dataSharing = new Subject<Employee>
// public dataSharing$ = new Observable<Employee>
  // constructor() { }
}
