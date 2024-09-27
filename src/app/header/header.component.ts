import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 mobileSlideAnimation:any=false;

 constructor(private route:Router){

 }

 navToHome=()=>{
  this.route.navigate(["/"])
 }

 menuClick=()=>{
  this.mobileSlideAnimation=true;
 }

 closeClick=()=>{
  setTimeout(()=>{
    this.mobileSlideAnimation=false;
  },400)
 
 }

}
