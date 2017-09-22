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
       <input id="species" class="form-control" #newSpecies placeholder="Enter new animal species">
       </div>
       <div class="form-group">
       <label for="age"> Age: </label>
       <input id="age" class="form-control" #newAge placeholder="Enter new animal age">
       </div>
       <div class="form-group">
       <label for="diet"> Diet: </label>
       <input id="diet" class="form-control" #newDiet placeholder="Enter this animal's diet">
       </div>
       <div class="form-group">
       <label for="location"> Location: </label>
       <input id="location" class="form-control" #newLocation placeholder="Where are you placing this animal">
       </div>
       <div class="form-group">
       <label for="care"> Caretakers Needed: </label>
       <input id="care" class="form-control" #newCaretaker placeholder="How many caretakers does this animal require">
       </div>
       <div class="form-group">
       <label for="sex"> Gender: </label>
       <input id="sex" class="form-control" #newGender placeholder="Enter the new animal's gender">
       </div>
       <div class="form-group">
       <label for="like"> Likes: </label>
        <input id="like" class="form-control" #newLikes placeholder="Enter some things this animal likes">
       </div>
       <div class="form-group">
       <label for="dislike"> Dislikes: </label>
       <input id="dislike" class="form-control" #newDislikes placeholder="Enter some things this animal dislikes">
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
