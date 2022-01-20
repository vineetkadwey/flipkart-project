import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  itemsCart:any=[]
  addtoCart(product : any){
    // let cartDataNull= productList.getItem('product')
    // if(cartDataNull==null){
    //   let storeDataGet:any=[];
    //   storeDataGet.push(product);
    // }
    // else{
    //   var proId =product.id;
    //   let index:number=-1;
    //   this.itemsCart=1;
    // }
    // for(let i=0;i<this.itemsCart.length; i++){
    // if(parsenInt(proId)===parseInt( this.itemsCart[i].id)){
    //   this.itemsCart[i].quantity= product.quantity;

    // }
  
    // }

    // if(index ==-1){
    //   this.itemsCart.push(product);
    //   this.productList.setItem(this.itermCart)

    // }
    // else{
    //   this.productList.setItem(this.itermCart)
    // }
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.getCount()
    

    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  getCount() : number{
    let grandCount=1;
    this.cartItemList.map((a:any)=>{
      grandCount *= a.quantity;
    })
    return grandCount;
  }

}
