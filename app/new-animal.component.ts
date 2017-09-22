import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <h4>Add a New Animal to the Zoo</h4>
       <br>
       <div>
       <label> Name: </label>
       <input #newName>
       </div>
       <div>
       <label> Species: </label>
       <input #newSpecies>
       </div>
       <div>
       <label> Age: </label>
       <input #newAge>
       </div>
       <div>
       <label> Diet: </label>
       <input #newDiet>
       </div>
       <div>
       <label> Location: </label>
       <input #newLocation>
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
       `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(animalName: string, animalSpecies: string, animalAge: number, animalDiet: string, animalLocation: string, animalCaretakerNeed: number, animalGender: string, animalLikes: string, animalDislikes: string) {
  var newAnimal: Animal = new Animal(animalName, animalSpecies, animalAge, animalDiet, animalLocation, animalCaretakerNeed, animalGender, animalLikes, animalDislikes);
  this.newAnimalSender.emit(newAnimal);
  }
}
