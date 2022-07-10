import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Product = new Product;
  constructor(private cartService:CartService, private productService:ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.getCurrentProduct();
    this.product.quantity = 1;
  }

  addToCart(quantity:number):void{
    this.product.quantity = quantity;
    this.cartService.addToCart(this.product);
  }

}
