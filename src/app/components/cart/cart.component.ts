import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { AppToastService } from 'src/app/services/app-toast.service';
import { ProductService } from 'src/app/services/product.service';

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
  creditCardError:Array<string> = [];

  cart:Product[] = [];

  constructor(private cartService: CartService, private productService:ProductService, private _router: Router, private appToastService:AppToastService) { }

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

  goToProductDetail(product:Product):void{
    this.productService.navigateToDetail(product);
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
    this.appToastService.show(`${product.name}removed from cart!`,`${product.quantity} ${product.name}(s) have been removed from your cart.`);
  }

  validateCreditCard(creditCardNumber:string){
    let errorText = [];
    if(creditCardNumber.length < 16 || creditCardNumber.length > 16){
      errorText.push('Credit card number field must be 16 characters.')
    }
    console.log(/^[0-9]+$/.test(creditCardNumber));
    if(creditCardNumber.length > 0 && !/^[0-9]+$/.test(creditCardNumber)){
      errorText.push('Credit card number field must use numbers.')
    }
    this.creditCardError = errorText;
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
