import {Component, inject} from '@angular/core';
import {ZipcodeEntryComponent} from '../zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from '../current-conditions/current-conditions.component';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {Store} from '@ngrx/store';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {selectCurrentConditions} from '../reducers';

@Component({
  selector: 'app-main-page',
  imports: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  private store = inject(Store);
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  addLocation(zipcode : string){
    this.store.dispatch(ZipCodeActions.addZipCode({zipcode}));
  }

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }
}
