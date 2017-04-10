import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import { UserListComponent } from './components/users-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import {UserAddComponent} from './components/user-add.component';
import {UserEditComponent} from './components/user-edit.component';
import {UserDeleteComponent} from './components/user-delete.component';
const appRoutes: Routes = [
    { path: '', component: UserListComponent,pathMatch: 'full' },
    { path: 'user', component: UserDetailComponent,children:[
        {path:':id',component:UserDetailComponent}
    ] },
    {path:'add',component:UserAddComponent},
    { path: 'edit', component: UserEditComponent,children:[
        {path:':id',component:UserEditComponent}
    ] },
    { path: 'delete', component: UserDeleteComponent,children:[
        {path:':id',component:UserDeleteComponent}
    ] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }