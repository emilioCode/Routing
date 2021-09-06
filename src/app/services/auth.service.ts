import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    console.log('AuthService service works');
  }

  public autorized:Boolean = false;

  changeAuth(){
    this.autorized = !this.autorized;
  }
  
}
