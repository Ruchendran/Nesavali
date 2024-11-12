import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { SuccessComponent } from './success/success.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogInOrRegisterComponent } from './log-in-or-register/log-in-or-register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",component:HomeComponent,pathMatch:"full",
    canActivate:[AuthGuard],
    data:{
      seo:{
        title:"Cotton Clothing in Power Looms",
        metaTags:[
          {name:"description",content:"Experience the softness and durability of our premium cotton cloth, designed for everyday comfort. Made from 100% natural fibers, it’s perfect for all your fabric needs."},
          {property:"og-image",content:"https://chathruknasathvathu.netlify.app/assets/logo.png"},
          {property:"og-description",content:"Experience the softness and durability of our premium cotton cloth, designed for everyday comfort. Made from 100% natural fibers, it’s perfect for all your fabric needs."},
          {property:"og-title",content:"Cotton Clothing in Power Looms"}
        ]
      }

    }
  },
  {
    path:"about",component:AboutComponent,pathMatch:"full",
    canActivate:[AuthGuard],
    data:{
      seo:{
        title:"About us",
        metaTags:[
          {name:"description",content:"With a legacy of craftsmanship and innovation, our mission is to deliver durable, soft, and eco-friendly cotton fabrics to meet the ever-growing demands of the textile industry"},
          {property:"og-image",content:"https://chathruknasathvathu.netlify.app/assets/diomond.webp"},
          {property:"og-description",content:"With a legacy of craftsmanship and innovation, our mission is to deliver durable, soft, and eco-friendly cotton fabrics to meet the ever-growing demands of the textile industry"},
          {property:"og-title",content:"About us"}
        ]
      }

    }
  },
  {
    path:"contact",component:ContactComponent,pathMatch:"full",
    canActivate:[AuthGuard],
    data:{
      seo:{
        title:"Contact us",
        metaTags:[
          {name:"description",content:"We would love to hear from you! Whether you have questions about our cotton fabrics, need assistance with an order, or want to learn more about our production process, feel free to get in touch."},
          {property:"og-image",content:"https://chathruknasathvathu.netlify.app/assets/whatsapp.webp"},
          {property:"og-description",content:"We would love to hear from you! Whether you have questions about our cotton fabrics, need assistance with an order, or want to learn more about our production process, feel free to get in touch."},
          {property:"og-title",content:"Contact us"}
        ]
      }

    }
  },
  {
    path:"products",component:ProductsComponent,pathMatch:"full",
    canActivate:[AuthGuard],
    data:{
      seo:{
        title:"Our Products with reliable sources",
        metaTags:[
          {name:"description",content:"Crafted with care, our cotton fabrics offer durability and a natural touch for all your garment needs."},
          {property:"og-image",content:"https://chathruknasathvathu.netlify.app/assets/products-images/shirt1.webp"},
          {property:"og-description",content:"Crafted with care, our cotton fabrics offer durability and a natural touch for all your garment needs."},
          {property:"og-title",content:"Our Products with reliable sources"}
        ]
      }

    }
  },
  {
    path:"success",component:SuccessComponent,pathMatch:"full",
    canActivate:[AuthGuard],
    data:{
      seo:{
        title:"Our sucesss in a businesss",
        metaTags:[
          {name:"description",content:"From humble beginnings, we’ve grown into a trusted name in the textile industry, delivering high-quality cotton fabrics to customers worldwide."},
          {property:"og-image",content:"https://chathruknasathvathu.netlify.app/assets/home-images/lend1.png"},
          {property:"og-description",content:"From humble beginnings, we’ve grown into a trusted name in the textile industry, delivering high-quality cotton fabrics to customers worldwide."},
          {property:"og-title",content:"Our sucesss in a businesss"}
        ]
      }

    }
  },
  {
    path:"404",component:NotfoundComponent,pathMatch:"full",
    data:{
      seo:{
        title:"",
        metaTags:[
          {name:"description",content:""},
          {property:"og-image",content:""},
          {property:"og-description",content:""},
          {property:"og-title",content:""}
        ]
      }

    }
  },
  {
    path:"auth",component:LogInOrRegisterComponent
  },
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"**",redirectTo:"/404",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
