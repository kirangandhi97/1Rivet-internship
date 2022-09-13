import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ang-prac1';
getData(value:string){
  console.log()
}
  // name = 'kiran';
getName(name:string,age:number){
  alert(name);
  console.log(age);
  
}
  
}
