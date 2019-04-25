import { Component, OnInit } from '@angular/core';
import {Stock} from "../model/stock";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  //   name: new FormControl(null,Validators.required), //就是一個FormControl，負責定義要驗哪些錯誤
  //   code: new FormControl(null,[Validators.required,Validators.minLength(2)]),
  //   price: new FormControl(0,[Validators.required,Validators.min(0)])
  // });

  // FormBuilder反應式表單建構
  public stockReactForm:FormGroup;  //一張表單就是一個FormGroup，底下有很多FormControl

  constructor(private fb:FormBuilder) { //FormBuilder能把原本好幾個new FormControl的寫法簡化，變成陣列的型式
    // this.stock = new Stock('宏達電','HTC',0,0,'NASDAQ');
    this.stock = new Stock(`宏碁${counter++}`,'ACER',20,10,'NASDAQ');
    this.createForm();
  }

  createForm(){
    this.stockReactForm = this.fb.group({
      name:[null,Validators.required],  //就是一個formcontrol，負責定義要驗哪些錯誤
      code:[null,[Validators.required,Validators.minLength(2)]],  //就是一個FormControl，負責定義要驗哪些錯誤
      price:[0,[Validators.required,Validators.min(0)]],  //就是一個FormControl，負責定義要驗哪些錯誤
      notablePeople:this.fb.array([]) //就是一個FormControl，負責定義要驗哪些錯誤，初始化為FormArray
    });
  }

  //這裡的get就是getter回傳值FormArray
  get notablePeople():FormArray{    //FormArray：用索引的方式去追蹤檢查表單的驗證狀態，一個FormArray有很多FormGroup
    return this.stockReactForm.get('notablePeople') as FormArray;
  }

  addNotablePerson(){
    this.notablePeople.push(this.fb.group({
      //這裡的FomrGroup是針對每個人物所驗證的FormGroup，每個人物檢驗就可視為一張表單
      //這裡的Fromgroup跟stockReactForm的FormGroup無關
      //最後把一個個人物檢驗的表單加入stockReactForm的屬性notablePeople(FormArray)裡
      name:['',Validators.required],  //人物驗證的FormControl
      title:['',Validators.required]  //人物驗證的FormControl
    }))
  }

  removeNotablePerson(index:number){    //把FormGroup從FormArray的指定索引處刪除
    this.notablePeople.removeAt(index);
  }

  loadStockFromServer(){
    this.stock = new Stock(`宏碁${counter++}`,'ACER',20,10,'NASDAQ');
    let stockFormModel = Object.assign({},this.stock);
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    delete stockFormModel.exchange;
      //因為stockReactForm只有設定name,code,price三個屬性，
      // 如果把沒用到的屬性previousPrice,favorite,exhchange也加上，表單回顯時會發生錯誤
    this.stockReactForm.setValue(stockFormModel);
  }

  patchStockForm(){
    this.stock = new Stock(`宏碁${counter++}`,'ACER',20,10,'NASDAQ');
    this.stockReactForm.patchValue(this.stock);
  }

  resetForm(){
    this.stockReactForm.reset();
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
      // this.stock = stockTemplateDrivenForm.value.stock;  ngModelGroup 模型驅動表單才會用到
      console.log('創造了一支股票:',this.stock);
    }else{
      console.error('股票表單是無效的狀態');
    }
  }

}
