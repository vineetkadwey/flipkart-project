import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  public grandCount !:number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      // this.grandCount=this.cartService.getCount();

    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
 inc(item:any){
   
  console.log(item.price);
  if(item.quantity!=5){
  item.quantity+=1;
   item.total+=item.price;
    console.log(item);
   
  }
 }
  dec(item:any){
     console.log(item);
    if(item.quantity!=1){
      
     item.quantity -=1;
     item.total-=item.price;
    }
    

  }
 
  


}
