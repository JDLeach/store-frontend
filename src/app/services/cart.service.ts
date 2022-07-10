import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = [];

  orderDetails = new Order;

  constructor() { }

  getCart():Product[]{
    return this.productList;
  }

  addToCart(productToAdd:Product):void{
    const existingProduct = this.productList.findIndex(p => p.id == productToAdd.id);
    if(existingProduct != -1){
      this.productList[existingProduct].quantity += productToAdd.quantity;
    }else{
      this.productList.push({...productToAdd});
    }
  }

  removeFromCart(product:Product):void{
    this.productList = this.productList.filter(p => p.id != product.id)
  }

  clearCart():void{
    this.productList = [];
  }

  cartCount():number{
    let itemCount = 0;
    this.productList.forEach(item => itemCount+= item.quantity)

    return itemCount;
  }

  setOrderDetails(order:Order):void{
    this.orderDetails = order;
  }

  getOrderDetails():Order{
    return this.orderDetails;
  }
}
