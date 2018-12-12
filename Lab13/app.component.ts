import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-smart [datas]="items"></app-smart>',
  styles: ['']
})
export class AppComponent {
  title = 'Lab13';

  items=["tigher","bird","lion"];

}
