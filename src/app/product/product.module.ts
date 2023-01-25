import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryFilterPipe } from './category-filter.pipe';
import { PriceFilterPipe } from './price-filter.pipe';
import { CategoryPipe } from './category.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CategoryFilterPipe,
    PriceFilterPipe,
    CategoryPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
