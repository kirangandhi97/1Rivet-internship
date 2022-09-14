import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
public condition:boolean;
public color:string;
public user:string[];
userslist:any[];


  constructor() { 
    this.condition=true;
    this.color="black";
    this.user=["kiran","hiral","jinal"];
    this.userslist=[
      {id:1,name:"kiran",email:"kirangandhi97@gmail.com"},
      {id:2,name:"yesha",email:"yeshagandhi97@gmail.com"},
      {id:3,name:"hiral",email:"hiraldubal112@gmail.com"},
      {id:1,name:"mittal",email:"mittal123@gmail.com"},
    ]
  }

  ngOnInit(): void {
  }
public yes(){
  this.condition=true;
}
public no(){
  this.condition=false;
}
}
