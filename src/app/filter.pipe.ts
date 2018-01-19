import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'age',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(animals: Animal[], ageSelect: any) {
    let output: Animal[] = [];

    if (ageSelect === 'young') {
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].age < 2) {
          output.push(animals[i]);
          }
        }
        return output;

    } else if (ageSelect === 'mature') {
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].age >= 2) {
          output.push(animals[i]);
          }
        }
        return output;
      } else {
        return animals;
    }
  }

}
