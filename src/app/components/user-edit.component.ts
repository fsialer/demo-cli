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
    public idUser:string;
    public nameU:string;
    public emailU:string;
    public passwordU:string;

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
        this.route.params.subscribe(params=>{
             this.nameU=params['name'];
             this.emailU=params['email'];
             this.passwordU=params['password'];
             console.log(this.idUser);
         });
        //let id:string=this.route.snapshot.params['id'];
        this._userService.editUser(this.idUser,this.user).subscribe(
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
            parseInt(this.idUser),
            this.nameU,
            this.emailU,
            this.passwordU
        );
        this.getUser();
     }

     getUser(){
        this.route.params.subscribe(params=>{
             this.idUser=params['id'];
             console.log(this.idUser);
         });
         
         //let id:string=this.route.snapshot.params['id'];
         this._userService.getUser(this.idUser).subscribe(
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