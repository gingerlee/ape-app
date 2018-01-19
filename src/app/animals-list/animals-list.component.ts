import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {
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
