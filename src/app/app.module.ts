import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  MyCompVComponent} from './myCompV/myCompV.component';
import { MyCompVVComponent } from './my-comp-vv/my-comp-vv.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompVComponent,
    MyCompVVComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
