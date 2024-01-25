import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ProductManagementService} from "../../services/product-management/product-management.service";
import {ShopList} from "../../Model/products.model";
import {ProductService} from "../../services/product/product.service";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiActiveZoneModule} from "@taiga-ui/cdk";
import {TuiAccordionModule} from "@taiga-ui/kit";
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    SharedModule,
    TuiAccordionModule,
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  open = false;
  toggle(open: boolean): void {
    this.open = open;
  }
  constructor(public productService:ProductService, private productManagementService: ProductManagementService) {
  }
  add(newItem: ShopList){
    this.productService.addItem(newItem)
  }
  delete(deleteItem: ShopList){
    this.productService.deleteItem(deleteItem)
  }
  submit() {
    let newForm: ShopList = {
      id: this.form.value.id || '',
      stock: this.form.value.stock || 0,
      name: this.form.value.name || '',
      description: this.form.value.description || '',
      price: this.form.value.price || 0,
      img: this.form.value.img || '',
      quantity: this.form.value.quantity || 0
    };
    this.add(newForm)
  }
  form = new FormGroup({
    stock: new FormControl(),
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    img: new FormControl(''),
    quantity: new FormControl(),
  });
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
  // @Input() items: ShopList[] = [];
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
    // const index = this.items.findIndex((item) => item.id === newForm.id);
    // if (index != -1) {
    //   this.items[index] = newForm;
    // }
    this.productService.updateItem(newForm);
    this.closeDialog();
  }
}
