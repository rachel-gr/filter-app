import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './Data';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Data[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.Text.indexOf(filter) !== -1);
  }

}
