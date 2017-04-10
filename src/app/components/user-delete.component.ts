import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
    template:'',
    providers:[UserService]
})
export class UserDeleteComponent implements OnInit {

     public user:User;
        public errorMessage:string;
        public status:string;
    constructor(
       private route: ActivatedRoute,
        private _userService:UserService,
        private router: Router,
        private fb:FormBuilder
    ) { 
       
    }
    
    ngOnInit() {
        this.deleteUser();
        this.router.navigate(['/']);
     }

     deleteUser(){
         let id:string=this.route.snapshot.params['id'];
         this._userService.deteleUser(id).subscribe(
             user=>{
                 if(user.status=='success'){
                    this.user=user.data
                 }else{
                    this.router.navigate(['']);
                    console.log('No se enc0ntro');
                 }
             },
            error=> this.errorMessage = <any>error
         );
     }
}