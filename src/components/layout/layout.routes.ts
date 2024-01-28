import {Route} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ProductManagementComponent} from "../product-management/product-management.component";
import {LoginComponent} from "../login/login.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {CartComponent} from "../cart/cart.component";
import {LayoutComponent} from "./layout.component";

export const ADMIN_ROUTES: Route[] = [
  {
    path:'layout',
    children: [
      {
      path: 'product-management',
      component: ProductManagementComponent,
      },
      {
        path:'detail',
        component: ProductDetailComponent
      },
      {
        path:'cart',
        component: CartComponent
      },
      {
        path:'**',
        redirectTo: 'home',
      },
      {
        path:'home',
        component: HomeComponent
      },
    ],
    component: LayoutComponent
  }
];
