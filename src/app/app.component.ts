import { Component,Pipe,PipeTransform } from '@angular/core';
import {PruebasPipe} from './pipes/pruebas.pipe';
@Component({
  selector: 'my-app',
  templateUrl: './views/home.html',
  
  
  
})
export class AppComponent  { 
  public titulo:string = 'Usuarios'; 
  public fecha=new Date(1900,6,27);
}
