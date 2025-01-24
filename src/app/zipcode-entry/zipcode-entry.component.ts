import {Component, output} from '@angular/core';


@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  zipAdded = output<string>();

}
