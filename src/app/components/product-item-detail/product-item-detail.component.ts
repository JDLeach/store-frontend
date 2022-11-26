import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { AppToastService } from 'src/app/services/app-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Product = new Product;
  constructor(private cartService:CartService, private productService:ProductService, private appToastService:AppToastService, private _router: Router) { }

  ngOnInit(): void {
    this.product = this.productService.getCurrentProduct();
    this.product.quantity = 1;
    if(this.product.id == -1){
      this._router.navigate(['']);
    }
  }

  addToCart(quantity:number):void{
    this.product.quantity = quantity;
    this.cartService.addToCart(this.product);
    this.appToastService.show(`${this.product.name} added to cart!`,`${this.product.quantity} ${this.product.name}(s) have been added to your cart.`);
  }

}
