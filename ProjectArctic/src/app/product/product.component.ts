import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listProduct :  Product[]=[]
increment(id:number){
 this.listProduct[id].like++
}
buy(id:number){
  this.listProduct[id].quantity--}
increment2(p:Product){
  p.like++
 }
 priceMax!:number
 alert!:number
 constructor(private ps:ProductService,private cl:CalculService,private cons :ConsumerProductService){}
id!:number
 ngOnInit(){
  //this.listProduct=this.ps.listProduct;
  //this.alert=this.cl.stat(this.listProduct,'quantity',0)
this.cons.getProduct().subscribe(data=>this.listProduct=data)
 }
}
