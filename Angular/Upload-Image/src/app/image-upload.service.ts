import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { uploadImage } from './uploadimage.model';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
public url:string=''
  constructor(private httpclient:HttpClient) { 
    this.url = 'http://localhost:3000/uploadImage/'
  }
  postData(data:uploadImage){
    return this.httpclient.post(this.url, data);
  }

  getData(){
    return this.httpclient.get(this.url);
  }
}
