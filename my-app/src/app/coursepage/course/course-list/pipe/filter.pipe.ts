import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/domain/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Course[], text: string, ...args: unknown[]): Course[] {
    value = value.filter(a => a.title.includes(text));
    return value;
  }

}
