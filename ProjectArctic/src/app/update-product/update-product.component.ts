import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
    RegisterForm=new FormGroup({
      id:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required,Validators.minLength(6)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      quantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      like: new FormControl({value:'0' ,disabled: true},[Validators.required])
  
    })
    test(){
      console.log(this.RegisterForm);
    }
    constructor(private ps:ProductService,private router :Router , private consP :ConsumerProductService){}
  
}
