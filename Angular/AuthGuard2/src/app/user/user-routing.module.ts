import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path: 'list',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
