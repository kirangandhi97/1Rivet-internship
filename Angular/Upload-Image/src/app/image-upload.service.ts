import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { uploadImage } from './uploadimage.model';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
public url:string=''
public barWidth:string="0%";
  constructor(private httpclient:HttpClient) { 
    this.url = 'http://localhost:3000/uploadImage/'
  }
  postData(data:uploadImage){
    return this.httpclient.post(this.url, data, {
      reportProgress:true,
      observe:'events'
    }).pipe(map(event=>{
      if(event.type==HttpEventType.UploadProgress){
this.barWidth = Math.round((100/(event.total||0)*event.loaded)) + "%";
      }
      else if(event?.type == HttpEventType.Response){
        this.barWidth="0%"
        window.open(`http://localhost:3000${event.body}`, "_blank")
      }
    }))
  }


  getData(){
    return this.httpclient.get(this.url);
  }
}
