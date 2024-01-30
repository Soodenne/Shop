import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputCountModule } from "@taiga-ui/kit";
import { TuiLabelModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { SharedModule } from "../shared/shared.module";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../services/product/product.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { BreadcrumComponent } from "../breadcrum/breadcrum.component";
import * as CartActions from '../../ngrx/cart/cart.action'
import { Store } from '@ngrx/store';
import { collection, deleteDoc, doc, Firestore, getDoc, onSnapshot, setDoc } from "@angular/fire/firestore";
import { DocumentData } from '@angular/fire/firestore';
import { ShopList } from "../../Model/products.model";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    SharedModule,
    TuiTextfieldControllerModule,
    NavBarComponent,
    BreadcrumComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private activatedRoutes: ActivatedRoute, public productService: ProductService, private firestore: Firestore, private store: Store) {
  }

  addToCart(product: any) {
    this.store.dispatch(
      CartActions.addCart({ product: product as ShopList })
    );
    console.log(product);
  }

  testForm = new FormGroup({
    testValue1: new FormControl(1, Validators.required),
  });

  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.queryParams['product'];
    this.product = this.productService.getItemById(id);
  }
}

