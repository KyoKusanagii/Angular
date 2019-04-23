import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private myService:MyserviceService) { }

  ngOnInit() {
    this.myService.sendHttpGet();
  }

}
