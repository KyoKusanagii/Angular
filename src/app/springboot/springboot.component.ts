import { Component, OnInit } from '@angular/core';
import {SpringbootService} from "../services/springboot.service";

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

  constructor(private springbootService:SpringbootService) { }

  ngOnInit() {
    this.springbootService.testSearch();
  }

}
