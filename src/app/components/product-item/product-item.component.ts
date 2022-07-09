import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

// TODO add link to product detail page

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;

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
  }

  addToCart(): void{
    this.cartService.addToCart(this.product);
  }

  removeFromCart(product:Product): void{
    this.cartService.removeFromCart(product);
  }

}
