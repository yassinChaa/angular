import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number
product!:Product
constructor(private act : ActivatedRoute,private ps :ProductService ,private cons:ConsumerProductService){}
  ngOnInit(){
    this.id=this.act.snapshot.params['id']
    this.product=this.ps.listProduct.find(p=>p.id==this.id) as Product
    this.cons.getProductById(this.id).subscribe(data=>this.product=data);

  }
}
