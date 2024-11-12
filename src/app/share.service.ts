import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  mobileSlideAnimation:any=false;
  constructor(private route:Router,private cookie:CookieService) { }

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


  navToAdmin=()=>{
    this.route.navigate(['admin'])
  }



  onLogin=()=>{
    this.loginForm=true;
    this.registerForm=false;
    this.route.navigate(['auth']);
  }

  
  onRegister=()=>{
    this.loginForm=false;
    this.registerForm=true;
    this.route.navigate(['auth']);
  }

  onLogout=()=>{
    this.cookie.delete('user-auth');
  }

}
