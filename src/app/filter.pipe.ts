import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(animals: Animal[], age: any) {
    let output: Animal[] = [];

    if (age === 'young') {
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].age < 2) {
          output.push(animals[i]);
          }
        }
        return output;

    } else if (age === 'mature') {
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
