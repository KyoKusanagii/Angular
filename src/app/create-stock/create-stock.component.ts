import { Component, OnInit } from '@angular/core';
import {Stock} from "../model/stock";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})


export class CreateStockComponent {

  public stock:Stock;
  public confirmed = false;
  exchanges = ['NYSE','NASDAQ','OTHER'];
  public nameControl = new FormControl();


  // 一般反應式表單建構
  // public stockReactForm: FormGroup = new FormGroup({
  //   name: new FormControl(null,Validators.required),
  //   code: new FormControl(null,[Validators.required,Validators.minLength(2)]),
  //   price: new FormControl(0,[Validators.required,Validators.min(0)])
  // });

  // FormBuilder反應式表單建構
  public stockReactForm:FormGroup;
  createForm(){
    this.stockReactForm = this.fb.group({
      name:[null,Validators.required],
      code:[null,[Validators.required,Validators.minLength(2)]],
      price:[0,[Validators.required,Validators.min(0)]]
    });
  }

  loadStockFromServer(){
    this.stock = new Stock('宏碁' + counter++,'ACER',20,10,'NASDAQ');
    let stockFormModel = Object.assign({},this.stock);
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    delete stockFormModel.exchange;
      //因為stockReactForm只有設定name,code,price三個屬性，
      // 如果把沒用到的屬性previousPrice,favorite,exhchange也加上，表單回顯時會發生錯誤
    this.stockReactForm.setValue(stockFormModel);
  }

  patchStockForm(){
    this.stock = new Stock('宏碁' + counter++,'ACER',20,10,'NASDAQ');
    this.stockReactForm.patchValue(this.stock);
  }

  resetForm(){
    this.stockReactForm.reset();
  }

  constructor(private fb:FormBuilder) {
    // this.stock = new Stock('宏達電','HTC',0,0,'NASDAQ');
    this.stock = new Stock('宏碁' + counter++,'ACER',20,10,'NASDAQ');
    this.createForm();
  }

  onSubmit(){
    // console.log('Name control Value',this.nameControl.value);
    console.log('Stock React Form Value',this.stockReactForm.value);
  }

  setStockPrice(price){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockTemplateDrivenForm){
    console.log('股票表單:',stockTemplateDrivenForm);
    if(stockTemplateDrivenForm.valid){
      this.stock = stockTemplateDrivenForm.value.stock;
      console.log('創造了一支股票:',this.stock);
    }else{
      console.error('股票表單是無效的狀態');
    }
  }

}
