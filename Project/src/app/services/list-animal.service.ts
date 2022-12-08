import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAnimalService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  removeSelectedAnimal(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  removeById(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  removeDifferentType(animais: Animal[], animal: Animal) {
    return animais.filter((t) => animal.type == t.type);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  } 

}
