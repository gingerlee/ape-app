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
    new Animal('Artic Fox', 'Sir Fox-a-lot', 3, 'field mice', 'Zoo Snow Fields', 3, 'Male', 'Pouncing', 'Heat'),
    new Animal('Hawaiian Monk Seal', 'Sealy', 10, 'Kelp', 'Zoo Ocean', 1, 'Female', 'Surfing', 'Sharks')
  ];
  selectedAnimal = null;

  selectAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
