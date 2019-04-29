import { Component, OnInit } from '@angular/core';
import {Stock} from "../../model/stock";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks:Stock[];
  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks().subscribe(stocks => {this.stocks = stocks});  //Angular的service
  }

  onToggleFavorite(stock:Stock){
    console.log('最喜歡的股票',stock,'已經觸發');
    stock.favorite = !stock.favorite;
  }

}
