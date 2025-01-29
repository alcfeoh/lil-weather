import {Country} from './app.types';
import {effect, inject, Injectable} from '@angular/core';
import {patchState, signalState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, pipe, tap} from 'rxjs';
import {CountryService} from './country.service';

const DEFAULT_COUNTRIES: Country[] = [];

type CountriesState = {
  countries: Country[],
  selectedCountry: string
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES,
  selectedCountry: ""
}

@Injectable({
  providedIn: 'root',
})
export class CountriesStore {

  private countryService = inject(CountryService);
  private readonly state = signalState(initialState);
  readonly countries = this.state.countries;

  constructor() {
    this.loadCountries();
  }

  selectCountry(selectedCountry: string) {
    patchState(this.state, {selectedCountry});
  }

  readonly loadCountries = rxMethod<void>(
    pipe(
      exhaustMap(() => {
        return this.countryService.getCountries().pipe(
          tap({
            next: (countries) => patchState(this.state, { countries }),
          })
        );
      })
    )
  );

  private logger = effect(() => console.log("Countries state:", this.state()));

}
