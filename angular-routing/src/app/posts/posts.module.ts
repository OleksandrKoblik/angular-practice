import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {RouterLink, RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLink
  ]
})
export class PostsModule { }
