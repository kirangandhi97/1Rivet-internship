import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderFormPresentationComponent } from './order-form-container/order-form-presentation/order-form-presentation.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';
import { OrderListPresentationComponent } from './order-list-container/order-list-presentation/order-list-presentation.component';
import { OrderService } from './order.service';



@NgModule({
  declarations: [
    OrderFormContainerComponent,
    OrderFormPresentationComponent,
    OrderListContainerComponent,
    OrderListPresentationComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
   
  ],
  providers:[
    OrderService
  ]
})
export class OrderModule { }
