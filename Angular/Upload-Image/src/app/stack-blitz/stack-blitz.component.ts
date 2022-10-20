import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-blitz',
  templateUrl: './stack-blitz.component.html',
  styleUrls: ['./stack-blitz.component.scss']
})
export class StackBlitzComponent implements OnInit {
  url:any;
  constructor() { }

  ngOnInit(): void {
  }
 
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event?.target?.result;
      }
    }
  }
}
