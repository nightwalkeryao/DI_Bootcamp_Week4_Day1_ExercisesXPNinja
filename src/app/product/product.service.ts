import { Injectable } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  get products(): Product[] {
    return require('./products.json');
  }
}
