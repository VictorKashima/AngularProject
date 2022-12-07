import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showComponents: boolean = false;
  buttonText: string = 'Mostar';
  array = ['Esconder', 'Mostrar'];

  showFunction(): void {
    this.showComponents = !this.showComponents;
    this.buttonText = this.array[Number(this.showComponents)];
    this.buttonText = this.array[Number(!this.showComponents)];

  }
  

  userName = 'Victor';
  userInfo = {
    email: "victorkashima04@gmail.com",
    number: "14-997972772"
  }


  title = 'Project';
}
