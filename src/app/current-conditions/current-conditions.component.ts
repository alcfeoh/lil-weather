import {Component, inject} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {selectCurrentConditions} from '../reducers';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    KeyValuePipe,
    RouterLink
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private store = inject(Store);
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  weatherService = inject(WeatherService);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }
}
