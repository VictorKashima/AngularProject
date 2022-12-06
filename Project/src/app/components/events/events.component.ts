import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  showBoolean: boolean = false;
  buttonText: string = 'Mostar';

  showMessage(): void {
    this.showBoolean = !this.showBoolean;
    if (this.showBoolean === false) {
      this.buttonText = 'Mostrar';
    } else {
      this.buttonText = 'Não mostrar';
    }
  }

}
