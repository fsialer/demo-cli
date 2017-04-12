
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import {UserAddComponent} from './components/user-add.component';
import { UserListComponent }    from './components/users-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserEditComponent } from './components/user-edit.component';
import { UserDeleteComponent } from './components/user-delete.component';

import {UserRoutingModule} from './user-routing.module';

import { UserService } from '../../services/users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserAddComponent,
    UserEditComponent,
    UserDeleteComponent
  ],
  providers: [ UserService ]
})
export class UserModule {}