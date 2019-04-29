import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {MyserviceService} from './myservice.service';
import {WelcomeComponent} from './welcome/welcome.component';
import {Stock} from "./model/stock";
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',                  // 前端的app-root標籤
  templateUrl: './app.component.html',  // app底下的component.html檔案
  styleUrls: ['./app.component.css']  // app底下的component.css檔案
})
export class AppComponent implements OnInit{
  title = '股市APP';
  public stockForInput:Stock;
  public stockForOutput:Stock;
  constructor(private myservice: MyserviceService,private welcome:WelcomeComponent
              ,private messageService:MessageService) {}
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

  // ngAfterContentChecked(): void {
  //   console.log('App component - After Content Checked!');
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('App component - After View Checked!');
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('App component - After View Init!');
  // }
  //
  // ngDoCheck(): void {
  //   console.log('App component - Do Check!');
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('App component - On Changes!',changes);
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('App component - On Destroy!');
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('App component - After Content Init!');
  // }

  testMethod(){
    console.log('在AppComponent理觸發test Method');
  }


  ngOnInit() {
    // console.log('App component - On Init!');
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = '元件建立了';
    this.componentproperty = this.myservice.serviceproperty;
    console.log(this.componentproperty);
    this.stockForInput = new Stock('趨勢','TREND',45,90,'AAA');
    this.stockForOutput = new Stock('華碩','ASUS',40,300,'BBB');
    this.messageService.message = '哈囉Message服務';
  }

  onToggleFavorite(stock:Stock){
    console.log('最喜歡的股票',stock,'已經觸發了');
    this.stockForOutput.favorite = !this.stockForOutput.favorite;
  }
}
