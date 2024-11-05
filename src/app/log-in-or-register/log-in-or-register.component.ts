import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-log-in-or-register',
  templateUrl: './log-in-or-register.component.html',
  styleUrls: ['./log-in-or-register.component.scss']
})
export class LogInOrRegisterComponent {

  constructor(public share:ShareService){

  }


  

}
