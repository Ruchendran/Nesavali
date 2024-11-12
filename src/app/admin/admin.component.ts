import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private api:ApiService){

  }

  tableData:any;

  ngOnInit(): void {
    this.api.selectUsers().subscribe((response)=>{
     this.tableData=response
    })
  }




}
