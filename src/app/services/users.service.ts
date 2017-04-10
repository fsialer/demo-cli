import { Injectable } from "@angular/core";
import {Http,Response,Headers,URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from "../models/user";

@Injectable()
export class UserService{
    constructor(
        private _http:Http
    ){}
    getUsers(){
            return this._http.get('http://localhost:8000/api/users').map(
                res=>res.json()
            );
        }
    getUser(id:string){
        return this._http.get('http://localhost:8000/api/users/'+id).map(
            res=>res.json()
        );
    }

    addUser(user:User){
        let json=JSON.stringify(user);
        let params=json;
        let headers=new Headers({"Content-Type":"application/json"});
        //headers.append('Content-Type','x-www-form-urlencoded');=>Inesvtigar
        return this._http.post('http://localhost:8000/api/users/',params,{headers:headers}).map(user=>user.json());
    }

    editUser(id:string,user:User){
        let json=JSON.stringify(user);
        let params=json;
        let headers=new Headers({"Content-Type":"application/json"});
        //headers.append('Content-Type','x-www-form-urlencoded');=>Inesvtigar
        return this._http.put('http://localhost:8000/api/users/'+id,params,{headers:headers}).map(user=>user.json());
    }

    deteleUser(id:string){
        let headers=new Headers({"Content-Type":"application/json"});
        //headers.append('Content-Type','x-www-form-urlencoded');=>Inesvtigar
        return this._http.delete('http://localhost:8000/api/users/'+id,{headers:headers}).map(user=>user.json());
    }
}