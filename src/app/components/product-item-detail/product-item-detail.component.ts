import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Product;
  constructor(private cartService:CartService) {
    this.product = {
      id: 1,
      name: "Book",
      description: "You can read it!",
      price: 9.99,
      quantity: 1,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
   }

  ngOnInit(): void {
    this.product = history.state;
    this.product.quantity = 1;
  }

  addToCart(quantity:number):void{
    this.product.quantity = quantity;
    this.cartService.addToCart(this.product);
  }

}
