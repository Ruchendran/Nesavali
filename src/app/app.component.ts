import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Artnesava';
  openWhatsapp:any=false;
  whatsCount:any=0;
  path:any=''
  
  constructor(private route:Router){
    this.route.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        this.path=event.urlAfterRedirects;
        console.log(this.path)
      }
    })
  }

  whatsAppClick=()=>{
    this.whatsCount=1;
    this.openWhatsapp=!this.openWhatsapp
  }


  MsgThroughWts=()=>{
    console.log("hit")
    window.open("https://wa.me/8074178839",'_blank');
  }

}
