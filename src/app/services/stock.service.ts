import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {_throw as ObservableThrow} from "rxjs-compat/observable/throw";
import {of as ObservableOf} from "rxjs-compat/observable/of";
import {Stock} from "../model/stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks:Stock[];
  constructor() {
    this.stocks = [
      new Stock('威剛','ADATA',90,25,'FF交易所'),
      new Stock('聯想','Lenovo',70,6,'GG交易所'),
      new Stock('金士頓','Kingston',150,450,'HH交易所')
    ];
  }

  getStocks():Observable<Stock[]>{
    return ObservableOf(this.stocks);
  }

  createStock(stock:Stock):Observable<any>{
    let foundStock = this.stocks.find(each=>each.code === stock.code);
    if(foundStock){
      return ObservableThrow({msg:`股票代碼:${stock.code}已經存在`});
    }
    this.stocks.push(stock)
    return ObservableOf({msg:`股票代碼:${stock.code}已經建立成功`});
  }

  toggleFavorite(stock:Stock):Observable<Stock>{
    let foundStock = this.stocks.find(each=>each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
    return ObservableOf(foundStock);
  }
}
