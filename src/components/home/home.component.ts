import { Component } from '@angular/core';
import {ShopComponent} from "../shop/shop.component";
import {SharedModule} from "../shared/shared.module";
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule, ShopComponent, FooterComponent, NavBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
