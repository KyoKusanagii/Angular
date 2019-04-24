import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stock} from '../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() public stock:Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;  //自訂事件觸發
  public stocks:Array<Stock>;
  public stockClasses;
  public stockStyles;
  private index;

  constructor(){
    this.toggleFavorite = new EventEmitter<Stock>();
  }
  ngOnInit() {
    // 用物件的寫法
    this.stocks = [
      new Stock('鴻海','TSC',100,80),
      new Stock('台積電','SSC',50,60),
      new Stock('廣達','LSC',70,200)
    ];

  //   let diff = (this.stocks.price / this.stocks.previousPrice) - 1;
  //   let largeChange = Math.abs(diff) > 1;
  //
  //   this.stockStyles = {
  //     'border':'solid 3px',
  //     'border-color': this.stock.isPositiveChange() ? 'green' : 'red'
  //   };
  //
  //   this.stockClasses = {
  //     'positive':this.stock.isPositiveChange(),
  //     'negative':!this.stock.isPositiveChange(),
  //     'large-change':largeChange,
  //     'small-change':!largeChange
  //   };
  }

  // toggleFavorite(event,index){
  //   console.log("我正在切換喜不喜歡這個股票的狀態!",event);
  //   console.log("顯示stock物件",this.stocks[index]);
  //   this.stocks[index].favorite = !this.stocks[index].favorite;
  // }

  trackStockByCode(index,stock){
    return stock.code;
  }

  onToggleFavorite(event){
    this.toggleFavorite.emit(this.stock);
  }

}
