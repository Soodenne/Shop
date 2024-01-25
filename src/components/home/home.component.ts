import { Component } from '@angular/core';
import {ShopComponent} from "../shop/shop.component";
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule, ShopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
