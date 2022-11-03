import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { StackBlitzComponent } from './stack-blitz/stack-blitz.component';
import { HttpClientModule} from '@angular/common/http';
import { FileUpload2Component } from './file-upload2/file-upload2.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    StackBlitzComponent,
    FileUpload2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
