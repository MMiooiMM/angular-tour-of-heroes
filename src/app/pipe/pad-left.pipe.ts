import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform {

  transform(val: number, count: number): string {
    return isNaN(count) ? val.toString() : this.padLeft(val.toString(), count);
  }

  padLeft(str: string, length: number) {
    if (str.length >= length) {
      return str;
    } else {
      return this.padLeft('0' + str, length);
    }
  }
}
