import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ShopList} from "../shop/shop.component";
export interface MenuItem{
  label: string;
  link: string;
}
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  menuItems : MenuItem[] = [
    { label: 'Home', link: '' },
    { label: 'Product Management', link: 'ProductManagement' },
    { label: 'Add new Shoes', link: '' },
  ];
  @ViewChild('cartDialog', { static: true })
  cartDialog!: ElementRef<HTMLDialogElement>;
  cartCdr = inject(ChangeDetectorRef);
  openCartDialog() {
    this.pay();
    Animation;
    this.cartDialog.nativeElement.showModal();
    this.cartCdr.detectChanges();
  }

  closeCartDialog() {
    this.cartDialog.nativeElement.close();
    this.cartCdr.detectChanges();
  }
  @Output() newItemEvent = new EventEmitter<ShopList>();
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    Animation;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

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

  submit() {
    let newForm: ShopList = {
      id: this.form.value.id || '',
      stock: this.form.value.stock || 0,
      name: this.form.value.name || '',
      description: this.form.value.description || '',
      price: this.form.value.price || 0,
      img: this.form.value.img || '',
      quantity: this.form.value.quantity || 0,
    };
    this.newItemEvent.emit(newForm);
    this.closeDialog()
  }
  @Input() itemsInCart: ShopList[] = [];
  // how to make total don't use fuction
  total = 0;
  pay() {
    this.itemsInCart.forEach((item) => {
      this.total += item.price * item.quantity;
    });
  }
}

