import { createReducer, on } from '@ngrx/store';
import { CurrentConditionsActions } from '../actions/current-conditions.actions';
import {CurrentConditions} from '../app.types';

export const currentConditionsFeatureKey = 'currentConditions';

export type CurrentConditionsState = Map<string, CurrentConditions>;


export const initialState: CurrentConditionsState = new Map<string, CurrentConditions>();

export const currentConditionsReducer = createReducer(
  initialState,
  on(CurrentConditionsActions.currentConditionsLoaded, (state, action) => {
    const cc = new Map(state);
    cc.set(action.zipcode, action.conditions);
    return cc;
  })
);

