import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `<app-dump (data)="loop($event)">{{item}}</app-dump> `,
  styles: ['']
})
export class SmartComponent {


  item:string;

  loop(item:string) {
    this.item=item;
  }


}
