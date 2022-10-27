import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  pathMatch:'full',
  redirectTo: 'home'
},
{
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
},
{
  path: 'home',
  component: HomeComponent
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'login',
  component:LoginPageComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
