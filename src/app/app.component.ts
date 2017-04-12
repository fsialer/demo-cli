import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './views/home.html',
  
  
  
})
export class AppComponent  { 
  public titulo:string = 'Usuarios'; 
  public fecha=new Date(1900,6,27);
}
