import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';

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
    path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
  },
  {
    path:'observable',
    component:ObservableComponent
  },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
