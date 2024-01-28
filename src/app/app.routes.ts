import { Routes } from '@angular/router';
import {ProductManagementComponent} from "../components/product-management/product-management.component";
import {HomeComponent} from "../components/home/home.component";
import {ProductDetailComponent} from "../components/product-detail/product-detail.component";
import {CartComponent} from "../components/cart/cart.component";
import {LoginComponent} from "../components/login/login.component";
export const routes: Routes = [
  {path: 'login', loadChildren: () => import('../components/login/login.routes').then(mod => mod.LOGIN_ROUTES)},
  {path: '', loadChildren: () => import('../components/layout/layout.routes').then(mod => mod.ADMIN_ROUTES)},
];
