import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {MenuItem} from "../nav-bar/nav-bar.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
export interface ShopList{
  id: string;
  img: string;
  stock: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  @ViewChild('formup', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog(item: ShopList) {
    this.formupdate.patchValue(item);
    Animation;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
  @Input() items: ShopList[] = [];
  formupdate = new FormGroup({
    id: new FormControl(''),
    stock: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    img: new FormControl(''),
  });
  updateItem() {
    let newForm: ShopList = {
      stock: this.formupdate.value.stock || 0,
      id: this.formupdate.value.id || '',
      name: this.formupdate.value.name || '',
      description: this.formupdate.value.description || '',
      price: this.formupdate.value.price || 0,
      img: this.formupdate.value.img || '',
      quantity: this.formupdate.value.quantity || 0,
    };
    const index = this.items.findIndex((item) => item.id === newForm.id);
    if (index != -1) {
      this.items[index] = newForm;
    }
    this.closeDialog();
  }
  // cartItems : ShopList[] = []
  // addCart(item: ShopList){
  //   for(let i = 0; i<this.cartItems.length;i++){
  //     if(this.cartItems[i].id === item.id){
  //       this.cartItems[i].quantity++;
  //       console.log(this.cartItems)
  //     }else{
  //       item.quantity = 1;
  //       this.cartItems.push(item)
  //       console.log(this.cartItems)
  //     }
  //   }
  // }
  @Output() addToCartEvent = new EventEmitter<ShopList>();
  addCart(item: ShopList) {
    item.stock--;

    this.addToCartEvent.emit(item);
    console.log(item);
  }
}

