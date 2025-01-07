import {Component, inject} from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe, DecimalPipe} from '@angular/common';
import {Forecast} from '../app.types';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  imports: [
    DatePipe,
    DecimalPipe,
    RouterLink
  ],
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode!: string;
  forecast!: Forecast;
  weatherService = inject(WeatherService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.weatherService.getForecast(this.zipcode)
        .subscribe(data => this.forecast = data);
    });
  }
}
