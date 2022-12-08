import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListAnimalService } from 'src/app/services/list-animal.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  constructor(private listServiceAnimal: ListAnimalService) {
    this.getAnimals()
  }

  animalSentence: string = ''

  animals: Animal[] = [];

  animalzinho: Animal = {
    id: 5,
    name: "Victor",
    type: "Human",
    age: 18,
    }

    showAge(animal: Animal): void {
      this.animalSentence = 'O animal ' +animal.name+ ' tem ' +animal.age+ ' anos';
    }

    // removeAnimal(animal: Animal) {
    //   this.animals = this.animals.filter((a) => animal.name !== a.name);
    //   // this.animals = this.listServiceAnimal.removeSelectedAnimal(this.animals, animal);
    // }

    removeAnimal(animal: Animal) {
      this.animals = this.animals.filter((a) => animal.name !== a.name);
      this.listServiceAnimal.removeById(animal.id).subscribe();
    }

    removeAnimalType(animal: Animal) {
      console.log("Removendo animais de tipos diferente");
      this.animals = this.listServiceAnimal.removeDifferentType(this.animals, animal);
    }

    getAnimals(): void {
      this.listServiceAnimal.getAll().subscribe((animals) => (this.animals = animals));
    }

}
