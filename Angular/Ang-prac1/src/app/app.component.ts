import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ang-prac1';


  // name = 'kiran';

 public displayVal:string[];

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