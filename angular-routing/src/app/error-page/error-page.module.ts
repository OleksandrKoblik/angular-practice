import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkWithHref,
    RouterOutlet
  ]
})
export class ErrorPageModule { }
