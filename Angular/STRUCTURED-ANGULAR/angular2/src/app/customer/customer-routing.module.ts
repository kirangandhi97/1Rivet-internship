import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: '', 
  component: CustomerComponent,
  children: [
    {
      path: ' ',
      pathMatch: 'full',
      redirectTo: 'list'
    },
    {
      path:'list',
      component: CustomersListComponent,
    },
    {
      path:'add',
      component: CustomersFormComponent,
    },
    {
      path:'edit/:id',
      component: CustomersFormComponent,
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
