import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  order = new Order;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.order = this.cartService.getOrderDetails();
  }
}
