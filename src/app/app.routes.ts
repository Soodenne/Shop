import { Routes } from '@angular/router';
import {ProductManagementComponent} from "../components/product-management/product-management.component";
import {HomeComponent} from "../components/home/home.component";
import {ProductDetailComponent} from "../components/product-detail/product-detail.component";
import {CartComponent} from "../components/cart/cart.component";
export const routes: Routes = [
  {
  path: 'product-management',
  component: ProductManagementComponent,
},
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'detail',
    component: ProductDetailComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
];
