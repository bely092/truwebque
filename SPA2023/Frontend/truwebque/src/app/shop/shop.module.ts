import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { HttpClientModule} from'@angular/common/http';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MyProductsComponent } from './component/my-products/my-products.component';

@NgModule({
  declarations: [
    ProductComponent,
    CartComponent,
    AllProductsComponent,
    ProductFormComponent,
    MyProductsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule
  ]

})
export class ShopModule { }