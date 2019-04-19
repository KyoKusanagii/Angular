import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                  //前端的app-root標籤
  templateUrl: './app.component.html',  //app底下的component.html檔案
  styleUrls: ['./app.component.css']  //app底下的component.css檔案
})
export class AppComponent {
  title = 'MyFirstAngular';
  months = ['一月','二月','三月','四月','五月','六月','七月'
    ,'八月','九月','十月','十一月','十二月'];   //月份陣列
  isavailable = false; //設定變數是否能存取

}
