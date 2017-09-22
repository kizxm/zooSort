import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
  <div class="well">
  <label>Enter new name:</label>
  <input [(ngModel)]="childSelectedAnimal.name">
  <br>
  <label>Enter new age:</label>
  <input [(ngModel)]="childSelectedAnimal.age">
  <br>
  <label>Assign new caretakers:</label>
  <input [(ngModel)]="childSelectedAnimal.caretakerNeed">
  <br>
  <label>Change Diet:</label>
  <input [(ngModel)]="childSelectedAnimal.diet">
  <br>
  <label>Move animal Location:</label>
  <input [(ngModel)]="childSelectedAnimal.location">
  <br>
  <button (click)="doneButtonClicked()">Done</button>
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
