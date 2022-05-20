import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoocommercePage } from './woocommerce.page';

const routes: Routes = [
  {
    path: '',
    component: WoocommercePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoocommercePageRoutingModule {}
