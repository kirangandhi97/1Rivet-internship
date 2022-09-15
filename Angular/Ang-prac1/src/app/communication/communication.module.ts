import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCommunicaionComponent } from './parent-communicaion/parent-communicaion.component';
import { ChildCommunicationComponent } from './parent-communicaion/child-communication/child-communication.component';



@NgModule({
  declarations: [
    ParentCommunicaionComponent,
    ChildCommunicationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentCommunicaionComponent,
    ChildCommunicationComponent
  ],
})
export class CommunicationModule { }
