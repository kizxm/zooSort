
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <br>
  <div class="row">
  <div class="col-sm-1 align-self-start">
  <div class="well">
  <label> Enter the maximum age of animal you want displayed: </label>
  <input #maxAge>
    <button (click)="sortAnimals(maxAge.value)" class="btn btn-secondary">Search</button>
    </div>
    </div>
    <br>
  </div>
  <div *ngFor="let currentAnimal of childAnimalList | ageFilter:filterAgeSender">
    <div class="well">
      <font size="5">{{currentAnimal.name}} </font>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Care Takers Needed: {{currentAnimal.caretakerNeed}}</li>
        <li>Gender: {{currentAnimal.gender}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
          <hr noshade>
          <button (click) = "editButtonHasBeenClicked(currentAnimal)" type="btn">Edit</button>
    </div>
    </div>
  `
})

export class AnimalListComponent{
  filterAgeSender: number = -1;
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
    }

    sortAnimals(num: number) {
      this.filterAgeSender = num;
    }
}
