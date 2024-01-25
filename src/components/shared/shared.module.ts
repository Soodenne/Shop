import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {TuiSidebarModule} from "@taiga-ui/addon-mobile";
import {TuiActiveZoneModule} from "@taiga-ui/cdk";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiInputCountModule} from "@taiga-ui/kit";



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule, RouterOutlet, TuiSidebarModule, TuiActiveZoneModule, TuiButtonModule, TuiInputCountModule,
  ],
  exports:[
    CommonModule, ReactiveFormsModule, RouterOutlet, TuiSidebarModule, TuiActiveZoneModule, TuiButtonModule, TuiInputCountModule,
  ]
})
export class SharedModule { }
