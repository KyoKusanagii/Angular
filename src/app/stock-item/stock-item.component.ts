import { Component, OnInit } from '@angular/core';
import {Stock} from '../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock:Stock;
  public stockClasses;
  public stockStyles;

  ngOnInit() {
    // this.name = '測試股票公司';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.postiveChange = this.price >= this.previousPrice;
    // this.favorite = false;

    // 用物件的寫法
    this.stock = new Stock('測試股票公司','TSC',100,80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 1;

    this.stockStyles = {
      'border':'solid 3px',
      'border-color': this.stock.isPositiveChange() ? 'green' : 'red'
    };

    this.stockClasses = {
      'positive':this.stock.isPositiveChange(),
      'negative':!this.stock.isPositiveChange(),
      'large-change':largeChange,
      'small-change':!largeChange
    };
  }

  toggleFavorite(event){
    console.log("我正在切換喜不喜歡這個股票的狀態!",event);
    console.log("顯示stock物件",this.stock);
    this.stock.favorite = !this.stock.favorite;
  }

}
