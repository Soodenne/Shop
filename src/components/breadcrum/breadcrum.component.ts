import { Component } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {TuiBreadcrumbsModule} from "@taiga-ui/kit";
import {RouterLink} from "@angular/router";
import {TuiLinkModule} from "@taiga-ui/core";

@Component({
  selector: 'app-breadcrum',
  standalone: true,
  imports: [SharedModule, TuiBreadcrumbsModule, RouterLink, TuiLinkModule],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.scss'
})
export class BreadcrumComponent {
  items = [
    {
      caption: 'Home',
      routerLink: 'home',
    },
    {
      caption: 'Nike',
      routerLink: 'home',
    },
    {
      caption: 'Nike Shoes',
      routerLink: '/components/multi-select',
    },
    {
      caption: 'Nike Kyrie',
      routerLink: '/navigation/breadcrumbs',
      routerLinkActiveOptions: {exact: true},
    },
  ];
}
