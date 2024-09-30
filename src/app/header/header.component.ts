import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(private route:Router,public share:ShareService){

 }

 navToHome=()=>{
  this.route.navigate(["/"])
 }

 menuClick=()=>{
  this.share.mobileSlideAnimation=true;
 }

 closeClick=()=>{
  setTimeout(()=>{
    this.share.mobileSlideAnimation=false;
  },0)
 
 }

}
