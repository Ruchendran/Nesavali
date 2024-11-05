import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { ShareService } from './share.service';
import { SeoService } from './seo.service';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Artnesava';
  openWhatsapp:any=false;
  whatsCount:any=0;
  path:any=''
  foter=true;
  
  constructor(private route:Router,public share:ShareService, private activatedRoute: ActivatedRoute,
    private seoService: SeoService){
    this.route.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        this.path=event.urlAfterRedirects;
        this.share.mobileSlideAnimation=false;
      }
    })
  }

  ngOnInit(): void {
    this.route.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        // console.log(data,this.activatedRoute.snapshot)
        this.seoService.updateMetaData(data);
      });

    this.route.events.subscribe((data)=>{
      if(data instanceof NavigationEnd){
        if(data.url==='/auth'){
          this.foter=false
        }
        else{
          this.foter=true
        }
      }
    })
  }

  whatsAppClick=()=>{
    this.whatsCount=1;
    this.openWhatsapp=!this.openWhatsapp
  }


  MsgThroughWts=()=>{
    console.log("hit")
    window.open("https://wa.me/+918074178839",'_blank');
  }

}
