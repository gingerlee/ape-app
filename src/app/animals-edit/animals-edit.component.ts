import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['./animals-edit.component.scss']
})
export class AnimalsEditComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  constructor() { }

  doneEditing(){
  this.doneEditingSender.emit();
  }

  ngOnInit() {
  }

}
