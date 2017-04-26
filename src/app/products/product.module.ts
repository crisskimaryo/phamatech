import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { AddcategoryproductComponent } from './addcategoryproduct/addcategoryproduct.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    AddproductComponent,
    ListproductComponent,
    CategoryproductComponent,
    AddcategoryproductComponent
  ]
})
export class ProductModule { }

