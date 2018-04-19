import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductsModule} from './products/products.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductsEditComponent} from './products/products-edit/products-edit.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
