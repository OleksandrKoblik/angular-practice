import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterOutlet
  ]
})
export class AboutModule { }
