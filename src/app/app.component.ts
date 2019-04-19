import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                  //前端的app-root標籤
  templateUrl: './app.component.html',  //app底下的component.html檔案
  styleUrls: ['./app.component.css']  //app底下的component.css檔案
})
export class AppComponent {
  title = 'MyFirstAngular';
}
