import { Component } from '@angular/core';
import { IonCheckbox, IonIcon, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonCheckbox, IonItem, IonList, IonIcon]
})
export class ExampleComponent {
  help(text: string, ev: MouseEvent) {
    ev.stopPropagation();
    console.log(text);
    // show the help in a popup
    // the checkbox must not trigger
  }
}
