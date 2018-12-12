import {Component,Output} from '@angular/core';

@Component({
  selector: 'app-dump',
  template: '<div appIsVisile appLoggable ><ul ><li *ngFor="let data of datas"  > {{data}}</li></ul></div>',
  styles: ['']
})
export class DumpComponent {

  @Output() datas:string[]=["tiger","bird","lion"];

}
