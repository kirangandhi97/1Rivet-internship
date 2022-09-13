import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
 public textData:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  clickme(){
    this.textData = true;
  }

}
