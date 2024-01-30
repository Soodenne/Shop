import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {ShopList} from "../../Model/products.model";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../../services/auth/auth.service";

let reactiveFormsModule = ReactiveFormsModule;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    SharedModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  constructor(public productService:ProductService, private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
  }

  @ViewChild('formup', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  // items: ShopList[] = [];
  formupdate = new FormGroup({
    id: new FormControl(''),
    stock: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    img: new FormControl(''),
  });
  // updateItem() {
  //   let newForm: ShopList = {
  //     stock: this.formupdate.value.stock || 0,
  //     id: this.formupdate.value.id || '',
  //     name: this.formupdate.value.name || '',
  //     description: this.formupdate.value.description || '',
  //     price: this.formupdate.value.price || 0,
  //     img: this.formupdate.value.img || '',
  //   };
  //   const index = this.items.findIndex((item) => item.id === newForm.id);
  //   if (index != -1) {
  //     this.items[index] = newForm;
  //   }
  // }
  @Output() addToCartEvent = new EventEmitter<ShopList>();
  addCart(item: ShopList) {
    item.stock--;

    this.addToCartEvent.emit(item);
    console.log(item);
  }

  signOut(){
    this.authService.signOut()
  }

}

