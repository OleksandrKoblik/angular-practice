import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutModule} from "./about/about.module";
import {AboutExtraModule} from "./about-extra/about-extra.module";
import {HomeModule} from "./home/home.module";
import {PostModule} from "./post/post.module";
import {PostsModule} from "./posts/posts.module";
import {ErrorPageModule} from "./error-page/error-page.module";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AboutExtraModule,
    HomeModule,
    PostModule,
    PostsModule,
    ErrorPageModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
