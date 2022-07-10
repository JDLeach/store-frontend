import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

// TODO add routing
// TODO add product detail page
// TODO add payment screen
// TODO add confirmation message

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsComponent,
    CartComponent,
    NavbarComponent,
    ProductItemDetailComponent,
    ToastsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
