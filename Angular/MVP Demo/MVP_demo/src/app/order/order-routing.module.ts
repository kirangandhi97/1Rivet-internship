import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormContainerComponent } from './order-form-container/order-form-container.component';
import { OrderListContainerComponent } from './order-list-container/order-list-container.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path:'list',
    component:OrderListContainerComponent
  },
  {
    path:'add',
    component:OrderFormContainerComponent
  },
  {
    path:'edit/:id',
    component:OrderListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
