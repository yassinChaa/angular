import { Injectable } from '@angular/core';
import { Product } from '../model/product';

//pour dire qu'il est un service 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct :  Product[] =[
    {id:1,title:'product',price:1500,quantity:0,like:0},
    {id:2,title:'product2',price:1000,quantity:10,like:0},
    {id:3,title:'product3',price:2000,quantity:10,like:0}]
    addProduct(p:Product){
      this.listProduct.push(p)
    }
  constructor() { }
}
