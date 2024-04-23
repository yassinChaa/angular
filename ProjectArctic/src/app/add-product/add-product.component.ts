import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
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
  constructor(private ps:ProductService){}

  save(){
    this.ps.addProduct(this.RegisterForm.value as any )
  }


}
