import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boxUp'
})
export class BoxUpPipe implements PipeTransform {

  transform(val: string): string {
    return `[${val}]`;
  }

}
