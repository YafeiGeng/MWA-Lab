import {Directive,Input} from '@angular/core';



@Directive({
  selector: '[appIsVisile]'
})
export class IsVisibleDirective {

  @Input() isVisible:boolean;

  constructor(){
      this.isVisible=true;
  };

}
