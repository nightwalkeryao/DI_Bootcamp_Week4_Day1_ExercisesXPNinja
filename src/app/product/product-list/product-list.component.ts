import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private ps: ProductService) {
    this.products = ps.products;
  }

  addProduct(p: Product): void {
    this.products.push(p);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
}