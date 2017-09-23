import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1><b>Zoo Sort for Animal Tracking</b></h1>
  <br>
  <div class="row">
  <div class="col-sm-7">
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  <div class="col-sm-5">
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal("Amber 🦉", "Owl", 2, "Mice, Small Prey, and Bugs", "Owl Roost", 2, "♀", "Trees", "Daytime"),
    new Animal("Arnold 🐨", "Koala", 10, "Eucalyptus Leaves", "Koala Courtyard", 1, "♂", "Naps", "Hard Labour")
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
