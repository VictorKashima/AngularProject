import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Victor';
  userInfo = {
    email: "victorkashima04@gmail.com",
    number: "14-997972772"
  }


  title = 'Project';
}
