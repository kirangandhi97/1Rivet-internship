import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormComponent } from '../employee/form/form.component';

@Injectable()
export class OverlayService {
  public onDetach =new Subject<boolean>;
  public overlayData:any;

  constructor(private overlay: Overlay) {

  }
  openOverlay(component: any) {
    let positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay.create(
      {
        positionStrategy,
        backdropClass:'backDropClass',
        hasBackdrop:true,
        panelClass:'overlay-panel',
        
      }
    );
    const formOverlay = new ComponentPortal(component);
    this.overlayData=  overlayRef.attach(formOverlay);

    overlayRef.backdropClick().subscribe(()=>{
      overlayRef.detach();
    })

    this.onDetach.subscribe(()=>{
      overlayRef.detach();
    })
    return this.overlayData;
  }


}
