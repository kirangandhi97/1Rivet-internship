import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import { SelectCountriesService } from './select-countries.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SelectComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    SelectCountriesService
  ]

})
export class SelectModule { }
