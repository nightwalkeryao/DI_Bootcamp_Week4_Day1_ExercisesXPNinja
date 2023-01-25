import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products: Product[], ...args: unknown[]): unknown {
    let categories: string[] = [];
    products.forEach(p => {
      if(categories.includes(p.category))
        categories.push(p.category);
    })

    let result: any = [];
    categories.forEach(c => {
      result[c] = products.filter(p => p.category === c)
    })

    return result;
  }
}
