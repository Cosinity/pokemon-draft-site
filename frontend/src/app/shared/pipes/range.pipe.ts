import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(value: number, start?: number): number[] {
    if (value < 0) {
      throw new Error(`Illegal Argument: cannot create a range from value less than 0: ${value}`)
    }

    const range: number[] = [];
    if (!start) {
      start = 0;
    }
    for (let i = 0 + start; i < value + start; i++) {
      range.push(i);
    }

    return range;
  }

}
