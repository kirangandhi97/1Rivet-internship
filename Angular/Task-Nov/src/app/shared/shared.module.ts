import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule} from '@angular/cdk/overlay'
import { OverlayService } from './overlay.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PhoneMaskingDirective } from './Directives/phone-masking.directive';
import { DataSharingService } from './DataShareService/data-sharing.service';


@NgModule({
  declarations: [
    CurrencyPipe,
    PhoneMaskingDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers:[
    OverlayService,
    DataSharingService
  ],
  exports:[
    PhoneMaskingDirective,
    CurrencyPipe
  ]
})
export class SharedModule { }
