import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <div class="well">
    <div class="form-group">
      <label for="nName">Enter new name:</label>
        <input [(ngModel)]="childSelectedAnimal.name" id="nName" class="form-control">
    </div>
    <div class="form-group">
      <label for="nAge">Enter new age:</label>
        <input [(ngModel)]="childSelectedAnimal.age"  id="nAge" class="form-control">
    </div>
    <div class="form-group">
      <label for="nCare">Assign new caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakerNeed" id="nCare" class="form-control">
    </div>
    <div class="form-group">
      <label for="nDiet">Change Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet"  id="nDiet" class="form-control">
    </div>
    <div class="form-group">
      <label for="nLoc">Move animal Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location"  id="nLoc" class="form-control">
    </div>
    <br>
    <button (click)="doneButtonClicked()" class="btn btn-green">Done</button>
  </div>
</div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
