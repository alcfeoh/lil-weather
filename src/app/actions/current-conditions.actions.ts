import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {CurrentConditions} from '../app.types';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    ' CurrentConditions': emptyProps(),
    ' CurrentConditions Loaded': props<{ zipcode: string, conditions: CurrentConditions }>(),
    ' CurrentConditions Failed': props<{ zipcode: string, error: Error }>(),
  }
});
