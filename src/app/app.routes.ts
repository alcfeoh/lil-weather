import { Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ForecastsListComponent} from './forecasts-list/forecasts-list.component';

export const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast/:zipcode', component: ForecastsListComponent
  }
];
