import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string, ...args: unknown[]): Product[] {
    return products.filter(p => p.category === category);
  }

}
