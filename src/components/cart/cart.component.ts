import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TuiLabelModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiInputCountModule } from "@taiga-ui/kit";
import { SharedModule } from "../shared/shared.module";
import { ProductService } from "../../services/product/product.service";
import { RouterLink } from "@angular/router";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CartState } from "../../ngrx/cart/cart.state";
import { Store } from "@ngrx/store";
import { CartModel } from '../../Model/cart.model';
import * as CartActions from '../../ngrx/cart/cart.action'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
    RouterLink,
    NavBarComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: CartModel = {
    createdAt: new Date().toString(),
    id: '1',
    productList: [],
    total: 0,
    userId: '1',
  };
  tempCartList: any = []
  shipping = 10
  cart$ = this.store.select('cart', 'cart');
  quantityFormList: FormControl[] = [];

  constructor(public productService: ProductService, private store: Store<{ cart: CartState }>) {

    this.cart$.subscribe((cart) => {
      if (cart) {
        this.cart = {
          ...this.cart,
          productList: cart.productList,
          total: cart.total,
        };
        cart.productList.forEach((product) => {
          this.quantityFormList.push(new FormControl(product.quantity));
        });
        this.tempCartList = [];
        this.tempCartList = cart.productList;
      }
    });
    this.quantityFormList.forEach((form, index) => {
      form.valueChanges.subscribe((value) => {
        this.updateQuantity(index, value);
      });
    });
  }

  ngOnInit(): void {
    console.log(this.tempCartList);
    console.log(this.cart.productList)
  }

  count(quantity: number, price: number) {
    return Math.ceil(quantity * price);
  }

  countTotal() {
    let total = 0;
    this.cart.productList.forEach((product, index) => {
      total += this.count(product.quantity, product.price);
    });
    return total;
  }

  updateQuantity(index: number, quantity: number) {
    this.store.dispatch(
      CartActions.updateCart({
        product: {
          ...this.cart.productList[index],
          quantity: quantity,
        },
      })
    );
  }

  removeProduct(index: number) {
    this.store.dispatch(
      CartActions.removeCart({ id: this.cart.productList[index].id })
    );
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}

