import {Image} from '../models/image';
export class User{
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password:string,
        //public image:Image
        //public image:string
    ){}
}