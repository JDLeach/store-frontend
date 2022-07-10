import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'productdetail', component:ProductItemDetailComponent},
  {path:'confirmation', component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
