import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
public empUrl="";


  constructor(private http:HttpClient) {
    this.empUrl = 'http://localhost:3000';
   }

// get call 
getUSer()
{
  return this.http.get(this.empUrl + '/employee');
}

// post data 
getDataFromServer(data:any)
{
  return this.http.post(this.empUrl + '/employee',data);
}

}
