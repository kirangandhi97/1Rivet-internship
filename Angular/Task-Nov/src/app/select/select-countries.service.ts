import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Country, State } from './countries.model';

@Injectable()
export class SelectCountriesService {
 private countryUrl:string= 'http://localhost:3000/country';
 private stateUrl:string = 'http://localhost:3000/state';
 private cityUrl:string = 'http://localhost:3000/city' 
  constructor(private http:HttpClient) { }

  getAllCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.countryUrl);
  }
  getAllState():Observable<State[]>{
    return this.http.get<State[]>(this.stateUrl);
  }
  getAllCity():Observable<City[]>{
    return this.http.get<City[]>(this.cityUrl);
  }
}
