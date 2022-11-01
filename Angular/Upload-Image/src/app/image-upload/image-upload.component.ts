import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  public uploadImageForm:FormGroup;
  public imageFile!: File;
  public image:any;
public base64String:any;
public imageData:any;

  constructor(private fb:FormBuilder, private uploadService:ImageUploadService, private sanitizer:DomSanitizer) { 
    this.uploadImageForm = this.fb.group({
      logoName:[''],
      logoPath:['']
    })
  }

  ngOnInit(): void {
    this.getAllData();
  }

public onSelectfiles(event:any){
    console.log(event);
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String = reader.result;
this.image = this.base64String                                                                      
}
// console.log(reader);
  // }


}

onSubmit(){
  this.uploadImageForm.controls['logoPath'].setValue(this.base64String);
  this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  })
}

getAllData(){
  this.uploadService.getData().subscribe((data)=>{
    this.imageData = data;
  })
}
}
