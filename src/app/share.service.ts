import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  mobileSlideAnimation:any=false;
  constructor() { }

  loginForm=true;
  registerForm=false;
  closeicon=true;
  openicon=false;
  
  iconClose=()=>{
    // console.log("hit")
    this.closeicon=false;
    this.openicon=true;
  }
  
  iconOpen=()=>{
    this.closeicon=true;
    this.openicon=false;
  }



  onLogin=()=>{
    this.loginForm=true;
    this.registerForm=false;
  }

  
  onRegister=()=>{
    this.loginForm=false;
    this.registerForm=true;
  }
}
