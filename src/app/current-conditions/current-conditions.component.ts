import {Component, inject} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router, RouterLink} from "@angular/router";
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    RouterLink
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  weatherService = inject(WeatherService);
  conditions = this.weatherService.currentConditions;
  locationService = inject(LocationService);
  router = inject(Router);

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
