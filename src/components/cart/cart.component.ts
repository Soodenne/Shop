import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputCountModule} from "@taiga-ui/kit";
import {SharedModule} from "../shared/shared.module";
import {ProductService} from "../../services/product/product.service";
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

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
  testForm = new FormGroup({
    testValue1: new FormControl(1, Validators.required),
  });
  constructor(public productService: ProductService) {}
  shipping = 10
}
