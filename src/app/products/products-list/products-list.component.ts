import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {Category} from '../../category/category';
@Component({
  selector: 'app-products-list',
  template: 
  `
  <style>
    .withBg{
      background:red;
    }
  </style>
  <table border=1>
    <tr *ngFor="let product of productNames" [class]=product.ElementClass >
      <td>{{product.ProductName}}</td>
      <td>{{product.CategoryID}}</td>
      <td><img [src]=product.ImageSource [class] height=200>
    </tr>
  </table>`
})
export class ProductsListComponent {
  image1:string="https://i.ytimg.com/vi/T3arcT2ntsE/maxresdefault.jpg";
  image2:string="https://royalcanin.pl/blog/wp-content/uploads/2016/12/231W-2-950x680.jpeg";
  productNames:Product[];
  constructor() {
    localStorage.setItem("product",JSON.stringify(
      [new Product("product",new Category('beverages',4),this.image1),
      new Product("product 2",new Category('fruits',5),this.image2)]
    ));
    this.productNames=JSON.parse(localStorage.getItem("product"));
    
  } 
}

