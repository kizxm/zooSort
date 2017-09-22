import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Zoo Sort for Animal Tracking</h1>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal("Harris 🐧", "Penguin", 16, "Fish and shrimp", "Penguin Pen", 1, "♂", "Cold Water, Ice, and The Artic", "Jerry Giraffe"),
    new Animal("Amber 🦉", "Owl", 2, "Mice, Small Prey, and Bugs", "Owl Roost", 1, "♀", "Trees", "Daytime")
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
