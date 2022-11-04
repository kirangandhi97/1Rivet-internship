import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  public uploadImageForm:FormGroup;
  public imageFile!: File;
  public image1:any;
  public image2:any;
  public image3:any;
  public image4:any;
  public image5:any;
public base64String1:any;
public base64String2:any;
public base64String3:any;
public base64String4:any;
public base64String5:any;
public imageData:any;
public barWidth1:string="0%";
public barWidth2:string="0%";
public barWidth3:string="0%";
public barWidth4:string="0%";
public barWidth5:string="0%";
public url:string=''


  constructor(private fb:FormBuilder, private uploadService:ImageUploadService, private httpclient:HttpClient) { 
    this.url = 'http://localhost:3000/uploadImage/'

    this.uploadImageForm = this.fb.group({
      logoName1:[''],
      logoName2:[''],
      logoName3:[''],
      logoName4:[''],
      logoName5:[''],
      logoPath1:[''],
      logoPath2:[''],
      logoPath3:[''],
      logoPath4:[''],
      logoPath5:['']
    })
  }

  ngOnInit(): void {
    // this.getAllData();
  this.uploadImageForm.get('logoName2')?.disable();
  this.uploadImageForm.get('logoName3')?.disable();
  this.uploadImageForm.get('logoName4')?.disable();
  this.uploadImageForm.get('logoName5')?.disable();
  }
// on change event 
public onSelectfile1(event:any){
    console.log(event);
    setTimeout(() => {
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
      var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String1 = reader.result;
this.image1 = this.base64String1                                                                     
}
    }, 3000);

// console.log(reader);
  // }
setTimeout(() => {
  this.onfile1Submit();
}, 7000);


}

public onSelectfile2(event:any){
  console.log(event);
    setTimeout(() => {
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
      var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String2 = reader.result;
this.image2 = this.base64String2                                                                     
}
    }, 3000);

    setTimeout(() => {
      this.onfile2Submit();
    }, 7000);
}
public onSelectfile3(event:any){
  console.log(event);
    setTimeout(() => {
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
      var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String3 = reader.result;
this.image3 = this.base64String3                                                                    
}
    }, 3000);

    setTimeout(() => {
      this.onfile3Submit();
    }, 7000);
}
public onSelectfile4(event:any){
  console.log(event);
    setTimeout(() => {
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
      var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String4 = reader.result;
this.image4 = this.base64String4                                                                     
}
    }, 3000);

    setTimeout(() => {
      this.onfile4Submit();
    }, 7000);
}
public onSelectfile5(event:any){
  console.log(event);
    setTimeout(() => {
    if(event.target.files.length > 0){
    this.imageFile = event.target.files[0]
    console.log(this.imageFile);
    }
    
      var reader = new FileReader();
reader.readAsDataURL(this.imageFile);
reader.onload = () =>{
this.base64String5 = reader.result;
this.image5 = this.base64String5                                                                  
}
    }, 3000);

    setTimeout(() => {
      this.onfile5Submit();
    }, 7000);
}


// onfile 
onfile1Submit(){
  this.uploadImageForm.controls['logoPath1'].setValue(this.base64String1);
  
  // this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  // })
  return this.httpclient.post(this.url, this.uploadImageForm.value, {
    reportProgress:true,
    observe:'events'
  }).pipe(map(event=>{
    if(event.type==HttpEventType.UploadProgress){
this.barWidth1 = Math.round((100/(event.total||0)*event.loaded)) + "%";
    }
    else if(event?.type == HttpEventType.Response){
      this.barWidth1="0%"
    }
  })).subscribe(res => {
    // console.log(res);
    if(this.barWidth1=='100%'){
      if(this.uploadImageForm.controls['logoName1'].valid){
        this.uploadImageForm.get('logoName2')?.enable();
      }
    }
    
  })

}
onfile2Submit(){
  this.uploadImageForm.controls['logoPath1'].setValue(this.base64String2);
  
  // this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  // })
  return this.httpclient.post(this.url, this.uploadImageForm.value, {
    reportProgress:true,
    observe:'events'
  }).pipe(map(event=>{
    if(event.type==HttpEventType.UploadProgress){
this.barWidth2 = Math.round((100/(event.total||0)*event.loaded)) + "%";
    }
    else if(event?.type == HttpEventType.Response){
      this.barWidth2="0%"
    }
  })).subscribe(res => {
    // console.log(res);
    if(this.barWidth2=='100%'){
      if(this.uploadImageForm.controls['logoName2'].valid){
        this.uploadImageForm.get('logoName3')?.enable();
      }
    }
    
  })
}
onfile3Submit(){
  this.uploadImageForm.controls['logoPath1'].setValue(this.base64String2);
  // this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  // })
  return this.httpclient.post(this.url, this.uploadImageForm.value, {
    reportProgress:true,
    observe:'events'
  }).pipe(map(event=>{
    if(event.type==HttpEventType.UploadProgress){
this.barWidth3 = Math.round((100/(event.total||0)*event.loaded)) + "%";
    }
    else if(event?.type == HttpEventType.Response){
      this.barWidth3="0%"
    }
  })).subscribe(res => {
    // console.log(res);
    if(this.barWidth3=='100%'){
      if(this.uploadImageForm.controls['logoName3'].valid){
        this.uploadImageForm.get('logoName4')?.enable();
      }
    }
    
  })
}
onfile4Submit(){
  this.uploadImageForm.controls['logoPath1'].setValue(this.base64String2);
  
  // this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  // })
  return this.httpclient.post(this.url, this.uploadImageForm.value, {
    reportProgress:true,
    observe:'events'
  }).pipe(map(event=>{
    if(event.type==HttpEventType.UploadProgress){
this.barWidth4 = Math.round((100/(event.total||0)*event.loaded)) + "%";
    }
    else if(event?.type == HttpEventType.Response){
      this.barWidth4="0%"
    }
  })).subscribe(res => {
    // console.log(res);
    if(this.barWidth4=='100%'){
      if(this.uploadImageForm.controls['logoName4'].valid){
        this.uploadImageForm.get('logoName5')?.enable();
      }
    }
    
  })
}
onfile5Submit(){
  this.uploadImageForm.controls['logoPath1'].setValue(this.base64String2);
  
  // this.uploadService.postData(this.uploadImageForm.value).subscribe((data)=>{
  // })
  return this.httpclient.post(this.url, this.uploadImageForm.value, {
    reportProgress:true,
    observe:'events'
  }).pipe(map(event=>{
    if(event.type==HttpEventType.UploadProgress){
this.barWidth5 = Math.round((100/(event.total||0)*event.loaded)) + "%";
    }
    else if(event?.type == HttpEventType.Response){
      this.barWidth5="0%"
    }
  })).subscribe(res => {
    // console.log(res);
  })
}



getAllData(){
  this.uploadService.getData().subscribe((data)=>{
    this.imageData = data;
  })
}


}
