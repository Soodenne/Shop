import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputCountModule} from "@taiga-ui/kit";
import {SharedModule} from "../shared/shared.module";
import {ProductService} from "../../services/product/product.service";
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import { CartModel } from '../../Model/cart.model';
import { Store } from '@ngrx/store';
import { CartState } from '../../ngrx/cart.state';
import * as CartActions from '../../ngrx/cart.actions';

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
export class CartComponent {
  cart: CartModel = {
    createdAt: new Date().toString(),
    id: '1',
    productList: [],
    total: 0,
    userId: '1',
  };

  cart$ = this.store.select('cart', 'cart');
  quantityFormList: FormControl[] = [];

  tempCartList:any = []


  // testForm = new FormGroup({
  //   testValue1: new FormControl(1, Validators.required),
  // });
  constructor(public productService: ProductService, private store: Store<{cart: CartState}>) {
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
      //   productService.cartList = [];
      // productService.cartList = cart.productList;
      // console.log(productService.cartList)
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
  shipping = 10

  ngOnInit(): void {
    // console.log(this.productService.cartList);
    console.log(this.tempCartList);
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
}
