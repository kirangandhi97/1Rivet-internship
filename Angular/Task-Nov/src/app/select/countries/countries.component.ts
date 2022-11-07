import { Component, OnInit } from '@angular/core';
import { Country } from '../countries.model';
import { SelectCountriesService } from '../select-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
public Countries:any;
public displayCities:any;
public displayState:any; 
  constructor(private countryService:SelectCountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
    // this.getStatesById();
  }

  getAllCountries(){
    this.countryService.getAllCountry().subscribe((country)=>{
      this.Countries = country;
    })
  }

  // getStatesById(){

  //   this.countryService.getAllState().subscribe((state)=>{
  //     this.States = state;
  //     console.log(state);
      
  //   })
  // }

  getStateByCountryID(event:any){    
    const countryId = event.target.value;
    console.log(countryId);
    this.countryService.getAllState().subscribe((res:any)=>{
      console.log(res);
      this.displayState= res.filter((data:any)=> data.countryId == countryId)
      console.log(this.displayState);
    })
  }
     

  getCityByStateId(event:any){
    const stateId = event.target.value;
    this.countryService.getAllCity().subscribe((res:any)=>{
      this.displayCities = res.filter((data:any)=> data.stateId == stateId)
      console.log(this.displayCities);
    })
  }
    
    
  }
