import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `<div><ul><li *ngFor="let data of datas"> <app-dump>{{data}}</app-dump></li></ul></div> `,
  styles: ['']
})
export class SmartComponent {

  @Input() datas: string[];


}
