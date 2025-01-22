import { createReducer, on } from '@ngrx/store';
import {ZipcodeActions} from '../actions/zipcode.actions';

export const zipCodesFeatureKey = 'zipCodes';

export type ZipCodeState = string[];


export const initialState: ZipCodeState = [];

export const zipCodesReducer = createReducer(
  initialState,
  on(ZipcodeActions.addZipCode, (state, action) => ([...state, action.zipcode])),
  on(ZipcodeActions.removeZipCode, (state, action) => state.filter( item => item !== action.zipcode))
);

