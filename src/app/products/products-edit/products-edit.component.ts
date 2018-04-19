import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';

class Product{
  ProductName:string;
}

@Component({
  selector: 'app-products-edit',
  template: `
    <form >
      <input [(ngModel)]="model.ProductName" type="text" name="ProductName">
      <select name="CategoryID">
      <option *ngFor="let c of categories" [value]="c">{{c}}</option>
      </select>
      <button (click)=showModel()>text</button>
    </form>`,
  styles: []
})
export class ProductsEditComponent implements OnInit {

  model:Product=new Product();
  categories:string[]=["beverages","sports"];
  constructor(private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{console.log(params);
    }
  )

  }
  showModel():void{
    alert(this.model.ProductName);
  }
}
