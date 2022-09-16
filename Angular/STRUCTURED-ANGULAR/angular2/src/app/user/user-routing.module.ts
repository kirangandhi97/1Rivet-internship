import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { ConditionComponent } from './condition/condition.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children:[
      {
        path:'binding',
        component:BindingComponent,
      },
      {
        path:'communication',
        component:CommunicationComponent,
      },
      {
        path:'condition',
        component:ConditionComponent,
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
