import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { FormComponent } from '../employee/form/form.component';

@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay) {

  }
  openOverlay(component: any) {
    let positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay.create(
      {
        positionStrategy,
        // backdropClass:''
      panelClass:'overlay-panel'
      }
    );
    const formOverlay = new ComponentPortal(component);
    overlayRef.attach(formOverlay);

  }
}
