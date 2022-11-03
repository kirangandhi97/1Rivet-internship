import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUpload2Component } from './file-upload2/file-upload2.component';

const routes: Routes = [
  {
    path:'',
    component:FileUpload2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
