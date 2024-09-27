import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('over') over!:ElementRef; 
  imageUrl="../../assets/home-images/land1.png"
  set:any=[
    {
      heading:"The power loom revolutionized textile manufacturing by automating the weaving process",
     text:"This innovation laid the foundation for modern textile industries, transforming economies and labor practices worldwide."
  },
  {
    heading:"Impact on the Textile Industry",
    text:"The introduction of power looms transformed the textile industry by increasing output and reducing labor costs. "
  },
  {
    heading:"Modern Power Looms",
    text:"Today, power looms have evolved into highly sophisticated machines equipped with advanced technology such as computerized controls and automated processes."
  },
  {
    heading:"Historical Development",
    text:"Over time, improvements in design and technology led to more efficient machines, gradually replacing manual weaving and enabling mass production of textiles."
  }
];
  inter:any=''
  Heading:any="The power loom revolutionized textile manufacturing by automating the weaving process";
  para:any="This innovation laid the foundation for modern textile industries, transforming economies and labor practices worldwide.";
  constructor(private route:Router){

  }

  ngOnInit(): void {
    this.inter=setInterval(()=>{
      let data=Math.floor(Math.random()*4)
      this.imageUrl=`../../assets/home-images/land${data+1}.png`;
      this.para=this.set[data].text;
      this.Heading=this.set[data].heading;
  
        this.over.nativeElement.classList.remove("ani-3d");
    },4000)
   }

   imageHover=()=>{
    //  console.log("hit")
     clearInterval(this.inter);
     this.over.nativeElement.classList.add("ani-3d");
   }

   imageLeave=()=>{
    this.inter=setInterval(()=>{
      let data=Math.floor(Math.random()*4)
      this.imageUrl=`../../assets/home-images/land${data+1}.png`
      this.para=this.set[data].text;
      this.Heading=this.set[data].heading;
      
        this.over.nativeElement.classList.remove("ani-3d");
    },4000)
   }

   goToProducts=()=>{
    this.route.navigate(["products"])
   }
}