import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListAnimalService } from 'src/app/services/list-animal.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListAnimalService, private route: ActivatedRoute) {
    this.getAnimal();
  } 

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => this.animal = animal);
  }

}
