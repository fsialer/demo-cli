import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule,JsonpModule  } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { Router } from '@angular/router';
import {UserModule} from './modules/users/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule,JsonpModule, AppRoutingModule,ReactiveFormsModule, FormsModule,UserModule],
  declarations: [AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
