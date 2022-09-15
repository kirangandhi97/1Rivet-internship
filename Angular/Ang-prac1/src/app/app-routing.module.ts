import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ParentCommunicaionComponent } from './communication/parent-communicaion/parent-communicaion.component';
import { ConditionComponent } from './condition/condition.component';
import { PipesComponent } from './condition/pipes/pipes.component';
import { Pipes2Component } from './condition/pipes2/pipes2.component';
import { Parent1Component } from './parent1/parent1.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'communication',
    component: ParentCommunicaionComponent
  },
  {
    path: ' ',
    pathMatch: "full",
    redirectTo: "home"
  },

  {
    path: 'condition',
    component: ConditionComponent,
    children: [
      // { path: '', pathMatch: 'full', redirectTo: 'condition' },
      {
        path: 'pipe',
        component: PipesComponent
      },
      {
        path: 'pipes2',
        component: Pipes2Component
      },
    ]
  },
  {
    path: 'simple',
    component: Parent1Component
  },
  // {
  // path:'**', component:404notfound
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
