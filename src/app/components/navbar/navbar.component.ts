import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkMode:boolean = true;
  modeClass = 'dark';

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  cartAmount():number{
    return this.cartService.cartCount();
  }

  changeMode():void{
    this.darkMode = !this.darkMode;
    this.modeClass = this.darkMode ? 'dark' : 'light'
    document.body.classList.toggle('light-theme')
  }
}
