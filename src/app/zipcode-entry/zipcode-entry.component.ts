import {Component, inject} from '@angular/core';
import {LocationService} from "../location.service";
import {Store} from "@ngrx/store";
import {ZipcodeActions} from '../actions/zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  private service = inject(LocationService);
  private store = inject(Store);

  addLocation(zipcode : string){
    this.store.dispatch(ZipcodeActions.addZipCode({zipcode}));
  }

}
