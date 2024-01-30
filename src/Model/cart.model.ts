import { ShopList } from "./products.model";

export interface CartModel {
    id: string;
    userId: string;
    total: number;
    createdAt: string;
    productList: ShopList[];
  }