import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ResidenceComponent } from './residence/residence.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';

const routes: Routes = [

  {path :'', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'apartment',component:ApartementsComponent},

  { path: 'addResidence', component: FormResidenceComponent },
  { path: 'apartments/:residenceId', component: ApartementsComponent },
  { path: 'addApartment', component: FormAppartementComponent},
  { path: 'apartmentDetails/:id', component: DetailAppartmentComponent }, 
   {path:'detail/:id',component:DetailProductComponent},

  {path :'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
