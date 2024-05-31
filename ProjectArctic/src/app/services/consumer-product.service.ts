import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
api:string="http://localhost:3000/products/"

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  getProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products/'+id)

  }
  addProduct(product:Product){
return this.http.post(this.api,product)
  }
 DeleteProduct(id:number){
    return this.http.delete(this.api+id)
      }
  UpdateProduct(id:number){
    
  }
}
