import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = '服務已建立';
  constructor() { }
  showTodayDate(){
    let date = new Date();
    return date;
  }
}
