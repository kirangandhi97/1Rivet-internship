import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { SelectComponent } from './select.component';

const routes: Routes = [
  { 
    path: '', component: SelectComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'country'
      },
      {
        path:'country',
        component:CountriesComponent
      }
    ]
   
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule { }
