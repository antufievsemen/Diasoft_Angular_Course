import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours: number = Math.trunc(value  / 60);
    let minutes: number = value % 60;
    let result: string = '';
    if (hours) {
        result = hours + ' hours ';
    }
    result = result + minutes + ' minutes ';
    return result;
  }

}
