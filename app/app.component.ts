import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Zoo Sort for Animal Tracking</h1>
  <animal-list></animal-list>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal("Harris", "Penguin", 16, "Fish and shrimp", "Penguin Pen", 1, "♂", "Cold Water, Ice, and The Artic", "Jerry Giraffe")
  ];

  editAnimal(animal) {
    this.selectedAnimal = animal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalToAdd: Animal) {
    this.masterAnimalList.push(newAnimalToAdd);
  }

}
