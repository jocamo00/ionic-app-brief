import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoocommercePageRoutingModule } from './woocommerce-routing.module';

import { WoocommercePage } from './woocommerce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoocommercePageRoutingModule
  ],
  declarations: [WoocommercePage]
})
export class WoocommercePageModule {}
