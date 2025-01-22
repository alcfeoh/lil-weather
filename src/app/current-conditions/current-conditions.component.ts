import {Component, inject} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey, ZipCodeState} from '../reducers/zip-codes.reducer';
import {tap} from 'rxjs';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  weatherService = inject(WeatherService);
  conditions = this.weatherService.currentConditions;
  locationService = inject(LocationService);
  router = inject(Router);
  zipcodes$ = inject(Store).select(zipCodesFeatureKey);
  zipcodes = inject(Store).selectSignal(state => state.zipCodes);

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
