import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
  pipes: [FilterPipe]
})
export class AnimalsListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  selectAnimalButtonClicked(animal: Animal) {
    this.clickSender.emit(animal);
  }

  ngOnInit() {
  }

}
