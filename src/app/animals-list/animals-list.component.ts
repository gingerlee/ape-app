import { Component, OnChange, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})

export class AnimalsListComponent implements OnInit {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  editAnimalButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}

}
