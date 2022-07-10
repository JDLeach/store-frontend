import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  carList: Product[] = [];

  currentProduct: Product = new Product;
  constructor(private http: HttpClient) {
   }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('assets/data.json');
  }

  setCurrentProduct(product:Product):void{
    this.currentProduct = product;
  }
  getCurrentProduct():Product{
    return this.currentProduct;
  }
}
