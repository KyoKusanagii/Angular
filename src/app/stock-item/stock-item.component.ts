import { Component, OnInit } from '@angular/core';
import {Stock} from '../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  // public name:string;
  // public code:string;
  // public price:number;
  // public previousPrice:number;
  // public postiveChange:boolean;
  // public favorite:boolean;
  // constructor() { }

  public stock:Stock;

  ngOnInit() {
    // this.name = '測試股票公司';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.postiveChange = this.price >= this.previousPrice;
    // this.favorite = false;

    // 用物件的寫法
    this.stock = new Stock('測試股票公司','TSC',85,80);
  }

  toggleFavorite(event){
    console.log("我正在切換喜不喜歡這個股票的狀態!",event);
    console.log("顯示stock物件",this.stock);
    this.stock.favorite = !this.stock.favorite;
  }

}
