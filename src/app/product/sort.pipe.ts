import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], order: string, ...args: unknown[]): Product[] {
    return products.sort(function(a, b): number{
      if(order == 'asc') {
        return a.name < b.name ? -1 : (a.name > b.name ?  1 : 0);
      } else if(order == 'desc') {
        return a.name > b.name ? -1 : (a.name < b.name ?  1 : 0);
      }

      return 0;
    });
  }

}
