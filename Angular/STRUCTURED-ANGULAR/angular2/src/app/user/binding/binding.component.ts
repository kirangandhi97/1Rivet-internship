import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  public name:string;
  constructor() {
    this.name=" yesha";
   }
  ngOnInit(): void {
  }

}
