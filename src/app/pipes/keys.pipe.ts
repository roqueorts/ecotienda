import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {
  transform(object: any): any {
    const keys = [];

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    console.log(keys);
    return keys;
  }
}
