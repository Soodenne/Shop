import { Injectable } from '@angular/core';
import {ShopList} from "../../Model/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {
  menuItems: ShopList[] = []
  constructor() { }
}
