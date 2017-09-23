
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="row">
    <div class="col-sm-1 align-self-start">

      <div class="well">

        <div class="form-group">
            <label for="agePipe"> Enter the maximum age of animals you want displayed: </label>
          <input id="agePipe" class="form-control" #maxAge placeholder="Animals this entered age and below will be displayed">
            <br>
            <button (click)="sortAnimals(maxAge.value)" class="btn btn-green">Search</button>
        </div>
      </div>
    </div>
  </div>
    <div *ngFor="let currentAnimal of childAnimalList | ageFilter:filterAgeSender">
      <div class="well">
        <font size="5" class="highlight"><b>{{currentAnimal.name}}</b></font>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Care Takers Needed: {{currentAnimal.caretakerNeed}}</li>
          <li>Gender: {{currentAnimal.gender}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
          <br>
            <button (click) = "editButtonHasBeenClicked(currentAnimal)" type="btn" class="btn btn-green">Edit</button>
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
