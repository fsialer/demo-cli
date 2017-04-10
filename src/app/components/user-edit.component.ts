import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from "../models/user";
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
    selector: 'restarante-edit',
    templateUrl: '../../views/user-add.html',
    providers:[UserService]
})
export class UserEditComponent implements OnInit {
    userForm:FormGroup;
    titulo:string="Editar Usuario";
     public user:User;
        public errorMessage:string;
        public status:string;
    constructor(
       private route: ActivatedRoute,
        private _userService:UserService,
        private router: Router,
        private fb:FormBuilder
    ) { 
        this.createForm();
    }
    createForm(){
        this.userForm=this.fb.group({
            name:['',[Validators.required,Validators.pattern("[A-Za-z]*")]],
            email:['',[Validators.required]],
            password:[''],
            
        });
    }
    onSubmit(){
        let id:string=this.route.snapshot.params['id'];
        this._userService.editUser(id,this.user).subscribe(
            user=>{
                this.status=user.status;
            },
            error=>{
                this.errorMessage=<any>error;
            }
        );
        this.router.navigate(['/']);
    }
    ngOnInit() {
        this.user=new User(
            parseInt(this.route.snapshot.params['id']),
            this.route.snapshot.params['name'],
            this.route.snapshot.params['email'],
            this.route.snapshot.params['password']
        );
        this.getUser();
     }

     getUser(){
         let id:string=this.route.snapshot.params['id'];
         this._userService.getUser(id).subscribe(
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