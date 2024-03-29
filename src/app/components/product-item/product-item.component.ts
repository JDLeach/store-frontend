import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { AppToastService } from 'src/app/services/app-toast.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

// TODO add link to product detail page

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  @Output() goToProductDetail: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService:CartService, private _router:Router, private productService:ProductService, private appToastService:AppToastService) {
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
  }

  toDetail(): void{
    this.goToProductDetail.emit(this.product);
  }

  addToCart(): void{
    this.cartService.addToCart(this.product);
    this.appToastService.show(`${this.product.name} added to cart!`,`${this.product.quantity} ${this.product.name}(s) have been added to your cart.`);
  }

  removeFromCart(product:Product): void{
    this.cartService.removeFromCart(product);
    this.appToastService.show(`${this.product.name}removed from cart!`,`${this.product.quantity} ${this.product.name}(s) have been removed from your cart.`);
  }
}
