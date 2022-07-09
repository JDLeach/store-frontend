import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = [];

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
    this.productList.filter(p => p.id != product.id)
  }

  clearCart():void{
    this.productList = [];
  }
}
