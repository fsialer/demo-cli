import { Component,OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import { User } from "../models/user";
@Component({
  selector: 'list-users',
  templateUrl: '../../views/users-list.html',
  providers:[UserService]
})
export class UserListComponent  implements OnInit{ 
    users:User[];
    errorMessage: string;
    public loading:any;
    constructor(
        private _userService:UserService
    ){}
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("User cargando");
        this.loading='show';
        this.getUsers();

    }
    getUsers(){
    this._userService.getUsers()
    .subscribe(
            users=>{                
                this.users=users.data;
                console.log(this.users);
            this.loading = 'hide'
        },
            error=> this.errorMessage = <any>error
        );
    }
 }