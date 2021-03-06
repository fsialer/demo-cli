import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http,Response,Headers,URLSearchParams} from "@angular/http";
@Component({
    selector: 'restarante-add',
    templateUrl: '../../views/user-add.html'
})
export class UserAddComponent implements OnInit {
    public nameU:string;
    public emailU:string;
    public passwordU:string;


    userForm: FormGroup;
    titulo: string = "Agregar Usuario";
    public user: User;
    public errorMessage: string;
    public status: string;

    public filesToUpload:Array<File>;

    constructor(
        private route: ActivatedRoute,
        private _userService: UserService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.createForm();
    }
    createForm() {
        this.userForm = this.fb.group({
            name: ['', [Validators.required, Validators.pattern("[A-Za-z]*")]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }
    onSubmit() {
        this._userService.addUser(this.user).subscribe(
            user => {
                this.status = user.status;
            },
            error => {
                this.errorMessage = <any>error;
            }
        );
        this.router.navigate(['users']);
    }
    ngOnInit() {
        this.route.params.subscribe(params=>{
             this.nameU=params['name'];
             this.emailU=params['email'];
             this.passwordU=params['password'];
             //console.log(this.idUser);
         });
        this.user = new User(
            0,
            this.nameU,
            this.emailU,
            this.passwordU
        );
    }

   /* fileChangeEvent(fileInput:any) {
        this.filesToUpload=<Array<File>>fileInput.target.files;
        
        this.makeFileRequest("http://localhost:8000/images/avatar/",[],this.filesToUpload).then((result)=>{
            this.user.image=result.filename;
        },(error)=>{
            console.log(error);
        });
    }
*/
/*    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
				var formData: any = new FormData();
				var xhr = new XMLHttpRequest();

				for(var i = 0; i < files.length; i++){
					formData.append("uploads[]", files[i], files[i].name);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
					}
				}
				xhr.open("POST", url, true);
				xhr.send(formData);
			});
    }*/
}