import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShopComponent, ShopList} from "../components/shop/shop.component";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ShopLists : ShopList[] = [
    { id:'1', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 3', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
    { id:'2', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 3', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
    { id:'3', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 3', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
    { id:'4', img:'./assets/Kyrie1.jpg',stock:0, name: 'Kyrie 3', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
  ];
  title = 'Shop';
  addItem(newItem: ShopList) {
    this.ShopLists.push(newItem);
  }
  itemlistCart: ShopList[] = [];

  addToCart(newItem: ShopList) {
    // check if item is already in cart dont add it
    let index = this.itemlistCart.findIndex((item) => item.id === newItem.id);
    if (index != -1) {
      this.itemlistCart[index].quantity++;
      return;
    }
    newItem.quantity = 1;

    this.itemlistCart.push(newItem);

    console.log(this.itemlistCart);
  }

}
