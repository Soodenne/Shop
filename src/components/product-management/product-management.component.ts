import { ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ProductManagementService } from "../../services/product-management/product-management.service";
import { ShopList } from "../../Model/products.model";
import { ProductService } from "../../services/product/product.service";
import { TuiButtonModule } from "@taiga-ui/core";
import { TuiActiveZoneModule } from "@taiga-ui/cdk";
import { TuiAccordionModule } from "@taiga-ui/kit";
import { SharedModule } from "../shared/shared.module";

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
  openCreate = false
  toggle(open: boolean): void {
    this.open = open;
  }
  constructor(public productService: ProductService, private productManagementService: ProductManagementService) {

  }
  readonly columns = [
    'numberOf',
    'id',
    'name',
    'description',
    'price',
    'image',
    'stock',
    'detail',
    'delete',
  ];

  testValue = new FormControl();

  filterList = ['Filter by id', 'Filter by username', 'Filter by role'];

  itemList: ShopList[] = [

  ];
  add(newItem: ShopList) {
    this.productService.addItem(newItem)
    this.openCreate = false
  }
  delete(deleteItem: ShopList) {
    this.productService.deleteItem(deleteItem)
  }

  selectedItem: ShopList | null = null;

  showDialog(item: ShopList): void {
    this.formupdate.setValue(item)
    this.open = true;
  }
  isCreate = false;

  showCreateDialog(): void {
    this.isCreate = true;
    this.openCreate = true;
  }
  submit() {
    let newForm: ShopList = {
      id: this.formcreate.value.id || '',
      stock: this.formcreate.value.stock || 0,
      name: this.formcreate.value.name || '',
      description: this.formcreate.value.description || '',
      price: this.formcreate.value.price || 0,
      img: this.formcreate.value.img || '',
      quantity: this.formcreate.value.quantity || 0
    };
    this.add(newForm)
  }

  formcreate = new FormGroup({
    id: new FormControl(''),
    stock: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    quantity: new FormControl(1),
    img: new FormControl(''),
  });

  formupdate = new FormGroup({
    id: new FormControl(''),
    stock: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    quantity: new FormControl(1),
    img: new FormControl(''),
  });
  updateItem() {
    let newForm: ShopList = {
      stock: this.formupdate.value.stock || 0,
      id: this.formupdate.value.id|| '',
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
    this.open = false
  }
}
