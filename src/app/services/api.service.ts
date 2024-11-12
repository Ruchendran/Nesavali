import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint:string='http://localhost:3000';

  constructor(private htp:HttpClient) { }


  login=(userDetails:any)=>{
   return this.htp.post(`${this.endpoint}/login`,userDetails);
  }

  register=(userDetails:any)=>{
   return this.htp.post(`${this.endpoint}/register`,userDetails)
  }

  selectUsers=()=>{
    return this.htp.get(`${this.endpoint}/select`)
  }

}
