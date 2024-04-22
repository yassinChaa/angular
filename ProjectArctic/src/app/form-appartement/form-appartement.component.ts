import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../model/appartement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css']
})
export class FormAppartementComponent {  
  constructor(private act:ActivatedRoute) { }
  id!:string;
  listApp:Apartment[]=[];
  ngOnInit() {
    this.id=this.act.snapshot.params['id'].toString();
    this.RegisterForm.patchValue({
      Residence: this.id
    });

  }
 
  
  RegisterForm=new FormGroup({
    ApartmentNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    FloorNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    Surface:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    Terrace: new FormControl('',[Validators.required]),
    SurfaceTerrace: new FormControl('',[Validators.pattern('[0-9]+')]),
    Category: new FormControl('', Validators.required),
    Description: new FormControl('',[Validators.required,Validators.minLength(10)]),
    Residence: new FormControl('',[Validators.required])
  })
  
  test(){
    console.log(this.RegisterForm);
  }
  }

