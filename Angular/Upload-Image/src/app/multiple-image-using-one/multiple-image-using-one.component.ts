import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-image-using-one',
  templateUrl: './multiple-image-using-one.component.html',
  styleUrls: ['./multiple-image-using-one.component.scss']
})
export class MultipleImageUsingOneComponent implements OnInit {
public urls:any;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event:any){
    console.log(event);
    if(event.target.files){
      for(let i=0; i<File.length; i++){
        var reader= new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload= (events:any) =>{
          console.log(events)
          
          this.urls.push(reader.result)
        }
      }
    }
    
  }
}
