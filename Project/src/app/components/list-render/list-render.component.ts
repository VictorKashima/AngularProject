import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animalSentence: string = ''

  animals: Animal[] = [
    {name: "Safira", type:"dog", age: 4},
    {name: "Ruby", type:"dog", age:2},
    {name:"Chiquinha", type:"dog", age:10},
    {name:"Aghata", type:"cat", age:2},
  ]

  animalzinho: Animal = {
    name: "Victor",
    type: "Human",
    age: 18,
    }

    showAge(animal: Animal): void {
      this.animalSentence = 'O animal ' +animal.name+ ' tem ' +animal.age+ ' anos';
    }

}
