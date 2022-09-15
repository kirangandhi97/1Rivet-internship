import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './parent1/child1/child1.component';
import { BindingComponent } from './binding/binding.component';
import { ConditionComponent } from './condition/condition.component';
import { CommunicationModule } from './communication/communication.module';
import { Parent1Component } from './parent1/parent1.component';
import { PipesComponent } from './condition/pipes/pipes.component';
import { Pipes2Component } from './condition/pipes2/pipes2.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    BindingComponent,
    ConditionComponent,
    Parent1Component,
    PipesComponent,
    Pipes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
