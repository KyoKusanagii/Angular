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
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService,WelcomeComponent,StockService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
