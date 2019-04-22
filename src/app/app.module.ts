import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {FormsModule} from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { RouterModule} from '@angular/router';
import {MyserviceService} from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: 'new-cmp',
          component: NewCmpComponent
        }
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
