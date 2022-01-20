import { GooglePayComponent } from './Component/google-pay/google-pay.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductsComponent } from './Component/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login',component:LoginComponent},
  {path:'Checkout',component:CheckoutComponent},
  {path:'pay',component:GooglePayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
