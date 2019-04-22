import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-new-cmp',                   //給定new-cmp底下的component.html自訂標籤
  templateUrl: './new-cmp.component.html',  //app/new-cmp底下的component.html檔案
  styleUrls: ['./new-cmp.component.css']     //app/new-cmp底下的component.css檔案
})
export class NewCmpComponent implements OnInit {
  newcomponent = "NewComponet建立了";
  constructor(private myservice: MyserviceService) { }
  todaydate;
  newcomponentproperty;
  newcomponent = "進入了Newcomponent";
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
