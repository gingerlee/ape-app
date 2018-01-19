import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-add',
  templateUrl: './animals-add.component.html',
  styleUrls: ['./animals-add.component.scss']
})
export class AnimalsAddComponent implements OnInit {
  @Input() AnimalConstructorFromParent: Animal;
  @Output() newAnimalAdder = new EventEmitter();

  constructor() { }

  addAnimal(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalAdder.emit(newAnimalToAdd);
  }

  ngOnInit() {
  }

}
