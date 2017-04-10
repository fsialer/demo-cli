import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserListComponent} from './components/users-list.component';
import { AppComponent }  from './app.component';
import { HttpModule,JsonpModule  } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDetailComponent } from './components/user-detail.component';
import {UserAddComponent} from './components/user-add.component';
import {UserEditComponent} from './components/user-edit.component';
import {UserDeleteComponent} from './components/user-delete.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule,JsonpModule, AppRoutingModule,ReactiveFormsModule, FormsModule],
  declarations: [ AppComponent,UserListComponent, UserDetailComponent,UserAddComponent,UserEditComponent,UserDeleteComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
