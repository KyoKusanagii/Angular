import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {FormsModule} from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import {MyserviceService} from './myservice.service';
import { StockItemComponent } from './stock-item/stock-item.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { CreateStockComponent } from './create-stock/create-stock.component';

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
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MyserviceService,WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
