import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
    template:''

})
export class UserDeleteComponent implements OnInit {
    public idUser:string;
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
        this.router.navigate(['/users']);
     }

     deleteUser(){
          this.route.params.subscribe(params=>{
             this.idUser=params['id'];
             
             console.log(this.idUser);
         });
         //let id:string=this.route.snapshot.params['id'];
         this._userService.deteleUser(this.idUser).subscribe(
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