import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
 @Input() name:string[]=[];
 @Output() bevEventEmitter = new EventEmitter<string>();


 bev:string[]=[];
 
  public textData:boolean;

  
  constructor() {
    this.textData=false;
    
   }

  ngOnInit(): void {
    // console.log(this.coldrink);
    
  }
  clickme(){
    this.textData = !this.textData;
  }

  addBev(val:string){
    // this.coldrink.push(val);
    this.bevEventEmitter.emit(val);
    console.log(val);
  }

}
