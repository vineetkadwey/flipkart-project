import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Component/cart/cart.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsComponent } from './Component/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Component/filter.pipe';
import { LoginComponent } from './Component/login/login.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { GooglePayComponent } from './Component/google-pay/google-pay.component';
import { GooglePayButtonModule } from "@google-pay/button-angular";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    CheckoutComponent,
    GooglePayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
