import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-communicaion',
  templateUrl: './parent-communicaion.component.html',
  styleUrls: ['./parent-communicaion.component.scss']
})
export class ParentCommunicaionComponent implements OnInit {
  title="parent-component";
  public userName:string[];

  constructor() { 
    this.userName=["kiran"]
  }

  ngOnInit(): void {
  }

  public addData(val:string){
    this.userName.push(val);
  }

  public addChildData(val:string){
    console.log('Parent', val);
  }
}
