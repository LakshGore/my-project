import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Ex1Component } from './event-bind/ex1/ex1.component';
import { EvBindEx2Component } from './event-bind/ev-bind-ex2/ev-bind-ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    Ex1Component,
    EvBindEx2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
