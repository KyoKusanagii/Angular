import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import {MyserviceService} from './myservice.service';
import { StockItemComponent } from './stock-item/stock-item.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import {StockService} from "./services/stock.service";
import {MessageService} from "./services/message.service";
import {Observable} from "rxjs";
import { SpringbootComponent } from './springboot/springboot.component';
import {SpringbootService} from "./services/springboot.service";

const routes:Routes = [
  {
    path: 'new-cmp',
    component: NewCmpComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'stock-item',
    component: StockItemComponent
  },
  {
    path: 'springboot',
    component: SpringbootComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe,
    StockItemComponent,
    UserInfoComponent,
    WelcomeComponent,
    CreateStockComponent,
    StockListComponent,
    SpringbootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService,WelcomeComponent,StockService,MessageService,SpringbootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
