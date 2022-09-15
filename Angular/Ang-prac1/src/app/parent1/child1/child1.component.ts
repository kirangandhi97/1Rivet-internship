import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
 @Input() coldrink:string='';
 bev:string[]=[];
 
  public textData:boolean;

  
  constructor() {
    this.textData=false;
   }

  ngOnInit(): void {
  }
  clickme(){
    this.textData = !this.textData;
  }

  addBev(val:string){
    this.bev.push(val);
    console.log(val);
  }

}
