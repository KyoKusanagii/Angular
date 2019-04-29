import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {

  allData;
  constructor(private http: HttpClient) {
  }

  testSearch(){
    this.sendPost().subscribe((data) => {
;          this.allData = data;
        }
      );
  }

  sendPost():Observable<any> {
    let url = 'http://localhost:8091/tms/applyApi/qryApplyFormStatus';
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    return this.http.post(url, headers);
  }
}
