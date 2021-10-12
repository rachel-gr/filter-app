import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './Data';

@Pipe({
  name: 'filterBySelectPipe'
})
export class FilterBySelectPipePipe implements PipeTransform {

  transform(items: Data[], filter: string): any {
    debugger;
    switch (filter) {
      case 'selected': {
        return items.filter(item => item.IsSelect);
      }
      case 'notSelected': {
        return items.filter(item => item.IsSelect == false);
      }
      default: {
        return items;
      }

    }

  }

}
