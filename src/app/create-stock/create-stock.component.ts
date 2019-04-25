import { Component, OnInit } from '@angular/core';
import {Stock} from "../model/stock";

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock:Stock;
  public confirmed = false;
  exchanges = ['NYSE','NASDAQ','OTHER'];
  constructor() {
    // this.stock = new Stock('宏達電','HTC',0,0,'NASDAQ');
    this.stock = new Stock('','',0,0,'NASDAQ');
  }

  setStockPrice(price){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm){
    console.log('股票表單:',stockForm);
    if(stockForm.valid){
      this.stock = stockForm.value.stock;
      console.log('創造了一支股票:',this.stock);
    }else{
      console.error('股票表單是無效的狀態');
    }
  }

}
