import {inject, Injectable} from '@angular/core';
import {WeatherService} from "./weather.service";

export const LOCATIONS : string = "locations";

@Injectable({providedIn: 'root'})
export class LocationService {

  locations : string[] = [];
  weatherService = inject(WeatherService);

  addLocation(zipcode : string){
    this.locations.push(zipcode);
    this.weatherService.addCurrentConditions(zipcode);
  }

  removeLocation(zipcode : string){
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      this.weatherService.removeCurrentConditions(zipcode);
    }
  }
}
