import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "ageFilter",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageLimit: number) {
    var output: Animal[] = [];
    if(ageLimit > 0) {
    input.forEach(item => {
      if(item.age <= ageLimit) {
        output.push(item);
      }
    });
    return output;
  } else {
    return input;
  }
}
}
