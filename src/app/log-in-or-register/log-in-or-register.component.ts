import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import  {ApiService} from "../../app/services/api.service";
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in-or-register',
  templateUrl: './log-in-or-register.component.html',
  styleUrls: ['./log-in-or-register.component.scss']
})
export class LogInOrRegisterComponent implements OnInit {

  constructor(public share:ShareService,private api:ApiService,private route:Router,private cookie:CookieService){

  }

  loginForm!:FormGroup;
  registerForm!:FormGroup;
  existedUser=false;
  passwordCorect=true;
  userValid=true;

  ngOnInit(): void {
   this.registerForm=new FormGroup({
    name:new FormControl('',Validators.required),
    mail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),

   });


   this.loginForm=new FormGroup({
    mail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
   })
  }

  onLogin=()=>{
   console.log(this.loginForm)
   this.api.login(this.loginForm.value).subscribe((response)=>{
    let result=JSON.parse(JSON.stringify(response));
    console.log(result)
    if(result.userStatus){
      this.userValid=true;
      if(result.passwordStatus){
        this.passwordCorect=true;
        this.cookie.set('user-auth',JSON.stringify(result.userDet),1);
        this.route.navigate([''])
      }else{
        // console.log('hit')
        this.passwordCorect=false;
        
      }
    }
    else{
      this.passwordCorect=false;
     this.userValid=false;
    }

   })
  }

  onRegister=()=>{
  this.api.register(this.registerForm.value).subscribe((response)=>{
       let result=JSON.parse(JSON.stringify(response));
        if(result.statusCode===200){
          this.existedUser=false;
          this.route.navigate(['']);
          this.cookie.set('user-auth',JSON.stringify(this.registerForm.value),1);
        }
        else{
          console.log("hit")
          this.existedUser=true;
        }
   })
  
  }


}
