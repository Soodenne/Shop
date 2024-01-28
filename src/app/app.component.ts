import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ShopComponent} from "../components/shop/shop.component";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {FooterComponent} from "../components/footer/footer.component";
import {Auth, onAuthStateChanged} from "@angular/fire/auth";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent, NavBarComponent, TuiRootModule, TuiDialogModule, TuiAlertModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'Shop';
  constructor(private auth: Auth, private authService: AuthService, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.router.navigate(['layout/home']).then()
      } else {
        this.router.navigate(['/login']).then()
      }
    });
  }
}
