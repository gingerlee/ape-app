import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animal: Animal = {
    species: 'Artic Fox',
    name: 'Sir Fox-a-lot',
    age: 3,
    diet: 'field mice',
    location: 'Zoo Snow Fields',
    caretakers: 3,
    sex: 'Male',
    like: 'Pouncing',
    dislike: 'Heat'
  };


  constructor() { }

  ngOnInit() {
  }

}
