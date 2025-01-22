import { createActionGroup, props } from '@ngrx/store';

export const ZipcodeActions = createActionGroup({
  source: 'ZipCode',
  events: {
    'Add ZipCode': props<{zipcode: string}>(),
    'Remove ZipCode': props<{zipcode: string}>(),
  }
});
