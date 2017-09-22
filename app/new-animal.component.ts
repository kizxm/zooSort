import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <div class="well">
  <h4>Add a New Animal to the Zoo</h4>
  <form>
       <br>
       <div class="form-group">
       <label for="name"> Name: </label>
       <input id="name" class="form-control" #newName placeholder="New animal name">
       </div>
       <div class="form-group">
       <label for="species"> Species: </label>
       <input id="species" class="form-control" #newSpecies placeholder="Enter animal species">
       </div>
       <div class="form-group">
       <label for="age"> Age: </label>
       <input id="age" class="form-control" #newAge>
       </div>
       <div class="form-group">
       <label for="diet"> Diet: </label>
       <input id="diet" class="form-control" #newDiet>
       </div>
       <div class="form-group">
       <label for="location"> Location: </label>
       <input id="location" class="form-control" #newLocation>
       </div>
       <div>
       <label> Caretakers Needed: </label>
       <input #newCaretaker>
       </div>
       <div>
       <label> Gender: </label>
       <input #newGender>
       </div>
       <div>
       <label> Likes: </label>
       <input #newLikes>
       </div>
       <div>
       <label> Dislikes: </label>
       <input #newDislikes>
       </div>
       <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newGender.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value = ''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
       </form>
       </div>
       `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(animalName: string, animalSpecies: string, animalAge: number, animalDiet: string, animalLocation: string, animalCaretakerNeed: number, animalGender: string, animalLikes: string, animalDislikes: string) {
  var newAnimal: Animal = new Animal(animalName, animalSpecies, animalAge, animalDiet, animalLocation, animalCaretakerNeed, animalGender, animalLikes, animalDislikes);
  this.newAnimalSender.emit(newAnimal);
  }
}
