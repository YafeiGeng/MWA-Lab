import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {



  @HostListener('dblclick') print(){
    console.log('DIV element has been clicked');
  }


}
