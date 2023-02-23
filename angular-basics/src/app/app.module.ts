import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import {Post4Component} from "./post4/post4.component";
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from "@angular/forms";
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgifElseComponent } from './ngif-else/ngif-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    BindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgifElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
