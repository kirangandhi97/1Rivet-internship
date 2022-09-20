import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: 'customer'
    , loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },

  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
