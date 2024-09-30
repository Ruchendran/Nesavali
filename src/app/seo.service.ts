import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  updateMetaData(data:any): void {
    // console.log("data")
    if (data) {
      // console.log(data.seo)
      const seoData = data.seo;

      // Update the title
      this.title.setTitle(seoData.title || '');

      // Update meta tags
      if (seoData.metaTags) {
        // console.log(seoData)
        
        seoData.metaTags.forEach((tag: any) => {
          if(tag.name){
            this.meta.updateTag({ name: tag.name, content: tag.content });
         
          }
          else{
           
            this.meta.updateTag({ property: tag.property, content: tag.content });
          }

         
        });
      }
    }
  }
}
