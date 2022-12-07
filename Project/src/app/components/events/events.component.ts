import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  showBoolean: boolean = false;
  buttonText: string = 'Mostrar';
  array2 = ['Mostrar', 'Não Mostrar'];
  booleanRandom: boolean = false;
  h1Text: string = 'JA VOLTO';
  buttonText2: string = 'VOLTEI';
  array = ['JA VOLTO', 'VOLTEI'];

  showMessage(): void {
    this.showBoolean = !this.showBoolean;
    this.buttonText = this.array2[Number(!this.showBoolean)];
    this.buttonText = this.array2[Number(this.showBoolean)];

  }

  toggleReturn(): void {
    this.booleanRandom = !this.booleanRandom;
    this.h1Text = this.array[Number(this.booleanRandom)];
    this.buttonText2 = this.array[(Number(!this.booleanRandom))];
    
  }


}