import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { ShopList } from '../../Model/products.model';
import {SharedModule} from "../shared/shared.module";
import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";
export interface MenuItem{
  label: string;
  link: string;
}
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  menuItems : MenuItem[] = [
    { label: 'Home', link: '' },
    { label: 'Product Management', link: 'product-management' },
    { label: 'Add new Shoes', link: '' },
    { label: 'Shoes detail', link: 'detail' },
  ];
  constructor(private router: Router,private productService: ProductService) {
  }
  goToCart() {
    this.productService.getCartList();
    this.router.navigate(['/cart']);
  }
  @Output() newItemEvent = new EventEmitter<ShopList>();

  protected readonly open = open;
  form = new FormGroup({
    stock: new FormControl(0),
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    img: new FormControl(''),
  });


  // @Input() itemsInCart: ShopList[] = [];
  // // how to make total don't use fuction
  // total = 0;
  // pay() {
  //   this.itemsInCart.forEach((item) => {
  //     this.total += item.price * item.quantity;
  //   });
  // }
}

