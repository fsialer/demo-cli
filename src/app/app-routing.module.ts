import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
const appRoutes: Routes = [
       
  {
      path:'', redirectTo:'/users',pathMatch:'full'
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,{preloadingStrategy: SelectivePreloadingStrategy}
        )
    ],
    exports: [
        RouterModule
    ],
    providers:[
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }