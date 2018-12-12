import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor() { }

  @HostListener('dbClick') print(){
    console.log('DIV element has been clicked');
  }

}
