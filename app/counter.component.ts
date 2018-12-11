import {Component,Input,Output} from '@angular/core';
import {EventEmitter} from "@angular/core";


@Component({
  selector: 'app-counter',
  template: '<div><button (click)="decrease()"> - </button> {{counterValue}} <button (click)="increase()"> + </button></div> ',


  styles: ['']
})
export class CounterComponent {


  @Input('counter') counterValue = 0;
  @Output() counterChange=new EventEmitter();

  decrease() {
    //this.counterValue--;
    this.counterChange.emit(--this.counterValue);
  }

  increase() {
    //this.counterValue++;
    this.counterChange.emit(++this.counterValue);
  }

}
