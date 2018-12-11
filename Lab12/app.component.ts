import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><app-counter [counter]="ComponentCounterValue" (counterChange)="counterChange($event)"></app-counter> Component Counter Value : {{ComponentCounterValue}}</div>',
  styles: ['div{border: 1px solid gray;width: auto;height: auto;text-align: center}']
})
export class AppComponent {
  title = "Lab11"

  ComponentCounterValue: number = 5;

  counterChange(e: number) {
    this.ComponentCounterValue = e;
  }
}

