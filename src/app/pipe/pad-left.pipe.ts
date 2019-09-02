import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform {

  transform(val: number, count: number): string {
    return isNaN(count) ? val.toString() : this.padLeft(val.toString(), count);
  }

  padLeft(str: string, count: number) {
    const length = count - str.length;
    if (length > 0) {
      return '0'.repeat(length) + str;
    } else {
      return str;
    }
  }
}
