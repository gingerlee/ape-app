import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Ape App';
  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Sir Fox-a-lot', 1, 'field mice', 'Zoo Snow Fields', 3, 'Male', 'Pouncing', 'Heat'),
    new Animal('Hawaiian Monk Seal', 'Sealy', 10, 'Kelp', 'Zoo Ocean', 1, 'Female', 'Surfing', 'Sharks'),
    new Animal('Giant Panda', 'Pandala', 6, 'Bamboo', 'Zoo Forest', 2, 'Female', 'Eating', 'Hunger')
  ];
  selectedAnimal = null;

  selectAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  done() {
  this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
