import { NgModule } from '@angular/core';

import { UserListComponent } from './components/users-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import {UserAddComponent} from './components/user-add.component';
import {UserEditComponent} from './components/user-edit.component';
import {UserDeleteComponent} from './components/user-delete.component';
import {RouterModule,Routes} from '@angular/router';

const userRoutes:Routes=[
  {
    path:'users',
    component:UserListComponent
  },
  {
    path:'user/:id',
    component:UserDetailComponent
  },
  {
    path:'users/agregar',
    component:UserAddComponent
  },
  {
    path:'users/edit/:id',
    component:UserEditComponent
  },
  {
    path:'users/delete/:id',
    component:UserDeleteComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
