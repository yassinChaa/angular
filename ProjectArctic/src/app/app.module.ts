import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';
import { FormComponent } from './form/form.component';
import { AddProductComponent } from './add-product/add-product.component';
import{HttpClientModule} from  '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ResidenceComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailProductComponent,
    FormResidenceComponent,
    FormAppartementComponent,
    ApartementsComponent,
    DetailAppartmentComponent,
    FormComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
