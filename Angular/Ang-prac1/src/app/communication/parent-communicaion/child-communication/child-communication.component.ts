import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-communication',
  templateUrl: './child-communication.component.html',
  styleUrls: ['./child-communication.component.scss']
})
export class ChildCommunicationComponent implements OnInit {
  @Input() data: string[];
  public ageNum: number;
  @Output() itemeventemitter: EventEmitter<string>;
  constructor() {
    this.data = [];
    this.itemeventemitter = new EventEmitter();
    this.ageNum = 20;
  }

  ngOnInit(): void {
  }

  public addAge(val: string) {
    this.itemeventemitter.emit(val);
    
  }
}
