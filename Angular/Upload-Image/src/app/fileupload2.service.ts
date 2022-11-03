import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fileupload2Service {
public url:string='' 
  constructor(private httpClient:HttpClient) { 
    this.url = 'http://localhost:3000/fileUpload2/'
  }

  uploadData(formData: any):Observable<any>{
    return this.httpClient.post<any>(`${this.url}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)));
  }

  private getEventMessage(event:HttpEvent<any>, formData: any){
    switch(event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
        return this.apiResponse(event);

      default:
    }
  }


  private fileUploadProgress(event:any){ 
    const percentDone = Math.round(100 * event.loaded/event.total);
    return {status:'progress', message:percentDone};
  }

  private apiResponse(event:any) {
    return event.body;
  }
}
