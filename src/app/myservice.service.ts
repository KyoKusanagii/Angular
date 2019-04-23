import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService{
  serviceproperty = '服務已建立';
  httpdata;
  headers = new HttpHeaders().set('Access-Control-Allow-Origin','*');
  constructor(private http: HttpClient) { }
  showTodayDate(){
    let date = new Date();
    return date;
  }
    sendHttpGet() {
      this.http.get('http://jsonplaceholder.typicode.com/users', this.headers).
      subscribe((data) =>
      {
        console.log(data);
        this.httpdata = data;
      }
    );
}

  // httpOptions = {
  //   headers: new HttpHeaders(
  //     { 'Access-Control-Allow-Origin': '*'
  //     }
  //   )
  // };
}
