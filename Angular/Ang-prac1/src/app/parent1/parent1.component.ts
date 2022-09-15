import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  title = 'Ang-prac1';
  beverages:string="tea";
  // name = 'kiran';

 public displayVal:string[];
coldrink: any;

 constructor(){
  this.displayVal=["kiran","jinal","hiral"];
 }

  ngOnInit(): void {

  }

  getData(value: string) {
    console.log()
  }

  public getName(name: string, age: number) {
    alert(name);
    console.log(age);
  }

  public getInput(val:string){
    console.log(val);  
    this.displayVal.push(val);
    
  }
}
