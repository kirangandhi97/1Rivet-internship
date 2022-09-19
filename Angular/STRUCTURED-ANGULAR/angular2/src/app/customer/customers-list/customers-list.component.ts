import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  
  customers_details:any[]=[];
  constructor() { 
    this.customers_details=[
      {id:1,name:"kiran", age:25, city:"bilimora"},
      {id:2,name:"kiran", age:25, city:"surat"},
      {id:3,name:"kiran", age:25, city:"navsari"},
      {id:4,name:"kiran", age:25, city:"valsad"}
    ]
  }

  ngOnInit(): void {
  }
  public edit(val:any){
    this.customers_details.push(val)
  }

 public add(){

  }
}
