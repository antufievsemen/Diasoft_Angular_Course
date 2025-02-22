import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], field: string, ...args: unknown[]): any {
    const array: any[] = [];
    value.forEach(element => {
      array.push(element);
    });
    return array.sort((a, b) => {
        return (a[field] < b[field]) ? 1 : -1;
    });
  }

}
