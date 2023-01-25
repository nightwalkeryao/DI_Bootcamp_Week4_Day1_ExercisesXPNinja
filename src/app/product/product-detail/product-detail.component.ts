import { Component } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product;
  
  constructor(private ps: ProductService) {

  }

  getProduct(id: number): Product {
    this. product = this.ps.products.find(p => p.id === id)!;
    return this.product;
  }
}
