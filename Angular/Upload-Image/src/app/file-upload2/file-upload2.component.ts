import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fileupload2Service } from '../fileupload2.service';

@Component({
  selector: 'app-file-upload2',
  templateUrl: './file-upload2.component.html',
  styleUrls: ['./file-upload2.component.scss']
})
export class FileUpload2Component implements OnInit {
  profileForm: FormGroup;
  public fileUpload:any;
  public profile:any;
  constructor(private fb:FormBuilder, private fileupload2Service:Fileupload2Service) { 
    this.profileForm= this.fb.group({
      name:[''],
      profile:['']
    });
    this.fileUpload = {status:'',message:''}
  }

  ngOnInit(): void {
    
  }

  onSelectedImage(event:any){
    // console.log(event.target.files);
    if(event.target.files.length>0){
      const profile = event.target.files[0];
      this.profileForm.get('profile')?.setValue(profile);
      // console.log(a);
      
    }
  }

  public onSubmit(){
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name')?.value);
    formData.append('profile', this.profileForm.get('profile')?.value);

    this.fileupload2Service.uploadData(formData).subscribe((res) =>
      this.fileUpload = res)
  }
}
