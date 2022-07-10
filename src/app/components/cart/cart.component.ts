import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name:string = '';
  address:string = '';
  cc:string = '';
  total:number = 0;
  totalParsed:string = '';

  cart:Product[] = [];

  constructor(private cartService: CartService, private _router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cart.forEach(p => this.total+= p.price * p.quantity);
    this.updateTotalPrice();
  }

  quantityChange(event:Event, product:Product):void{
    const newQuantity = (event.target as HTMLInputElement).value;
    if( newQuantity !=  product.quantity.toString()){
      product.quantity = parseInt(newQuantity);
    }
    this.updateTotalPrice()
  }

  updateTotalPrice():void{
    this.total = 0;
    this.cart.forEach(p => this.total+= p.price * p.quantity);
    this.totalParsed = new Intl.NumberFormat('en-us', {style:"currency", currency:"USD"}).format(this.total)
  }

  removeProduct(product:Product):void{
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart();
    this.updateTotalPrice();
  }

  submitOrder():void{
    // HERE WOULD BE A POST CALL VIA THE HTTP CLIENT IF THIS WAS LIVE
    // Instead just navigating to the confirmation message
    let itemCount = 0;
    this.cart.forEach(p => itemCount += p.quantity);
    this.cartService.setOrderDetails({
      fullName: this.name,
      amountOfItems: itemCount,
      totalCost: this.totalParsed
    })
    this._router.navigateByUrl('confirmation');
  }


}
