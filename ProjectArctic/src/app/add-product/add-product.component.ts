import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Router } from '@angular/router';

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
  constructor(private ps:ProductService,private router :Router , private consP :ConsumerProductService){}

  save(){
  //  this.ps.addProduct(this.RegisterForm.value as any )
this.consP.addProduct(this.RegisterForm.value as any).subscribe({
  next:() {this.router.navigateByUrl('/product'),
  error:(error)=> console.log(error)
  complete:()=> console.log(done)
    
  },
}

)
}


}
