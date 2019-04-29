import { Component, OnInit } from '@angular/core';
import {Stock} from "../../model/stock";
import {StockService} from "../../services/stock.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks$:Observable<Stock[]>;
  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();  //Angular的service
  }

  onToggleFavorite(stock:Stock){
    console.log('最喜歡的股票',stock,'已經觸發');
    stock.favorite = !stock.favorite;
  }

}
