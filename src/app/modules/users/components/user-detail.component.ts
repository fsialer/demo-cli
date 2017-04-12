import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from "../../../models/user";
@Component({
    selector: 'user-detail',
    templateUrl: '../../views/user-detail.html'
})
export class UserDetailComponent implements OnInit {
    public idUser:string;

    public loading:any;;
    errorMessage: string;
    user:User[];
    constructor(
        private route: ActivatedRoute,
        private _userService:UserService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.loading='show';
        this.getUser();
     }

     getUser(){
         this.route.params.subscribe(params=>{
             this.idUser=params['id'];
             console.log(this.idUser);
         });
         //let id:string=this.route.snapshot.params['id'];
         this._userService.getUser(this.idUser).subscribe(
             user=>{{
                 if(user.status=='success'){
                    this.user=user.data;
                    console.log(this.user);
                 }else{
                    this.router.navigate(['']);
                    console.log('No se enc0ntro');
                 }};
             this.loading = 'hide';},
            error=> this.errorMessage = <any>error
         );
     }
}