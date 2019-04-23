import {Component, OnInit} from '@angular/core';
import {MyserviceService} from './myservice.service';
import {WelcomeComponent} from './welcome/welcome.component';

@Component({
  selector: 'app-root',                  // 前端的app-root標籤
  templateUrl: './app.component.html',  // app底下的component.html檔案
  styleUrls: ['./app.component.css']  // app底下的component.css檔案
})
export class AppComponent implements OnInit{

  constructor(private myservice: MyserviceService,private welcome:WelcomeComponent) {}
  todaydate;
  componentproperty;
  months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'
    , '八月', '九月', '十月', '十一月', '十二月'];   // 月份陣列
  isavailable = true; // 設定變數是否能存取
  today = new Date();
  jsonval = {name: 'Max', age: '26', company: '特力集團', address: '台北市內湖區'};
  myClickFunction(event) {
    alert('按鈕事件觸發了!');
    console.log(event);
  }
  changeMonths(event) {
    alert('月份更換了!!');
    console.log(event);
  }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = '元件建立了';
    this.componentproperty = this.myservice.serviceproperty;
    console.log(this.componentproperty);
  }
}
