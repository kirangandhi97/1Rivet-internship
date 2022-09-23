import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  { 
    path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
