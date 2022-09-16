import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { ConditionComponent } from './condition/condition.component';


@NgModule({
  declarations: [
    UserComponent,
    BindingComponent,
    CommunicationComponent,
    ConditionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    BindingComponent,
    CommunicationComponent,
    ConditionComponent
  ]
})
export class UserModule { }
