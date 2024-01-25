import {Component, OnInit} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiInputCountModule} from "@taiga-ui/kit";
import {TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {SharedModule} from "../shared/shared.module";
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../../services/product/product.service";
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    SharedModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit{
  product: any;
  constructor(private activatedRoutes: ActivatedRoute, private productService: ProductService) {
  }
  testForm = new FormGroup({
    testValue1: new FormControl(1, Validators.required),
  });
  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.queryParams['product'];
    this.product = this.productService.getItemById(id);
  }
}

