import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter (counterChange)="ComponentCounterValue=$event"></app-counter> Component Counter Value {{ComponentCounterValue}}',
  styles: ['']
})
export class AppComponent {
    title="Lab11"

    ComponentCounterValue:number=0;
}

