import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputCountModule} from "@taiga-ui/kit";
import {SharedModule} from "../shared/shared.module";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    TuiLabelModule,
    TuiTextfieldControllerModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  testForm = new FormGroup({
    testValue1: new FormControl(1, Validators.required),
  });
  constructor(public productService: ProductService) {}
}
