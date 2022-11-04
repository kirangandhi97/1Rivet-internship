import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule} from '@angular/cdk/overlay'
import { OverlayService } from './overlay.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers:[
    OverlayService
  ]
})
export class SharedModule { }
