import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: Product[], min: number, max: number, ...args: unknown[]): Product[] {
    return products.filter(p => p.price >= min && p.price <= max);
  }

}
