import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LourdesBeiraRioPage } from './lourdes-beira-rio.page';

const routes: Routes = [
  {
    path: '',
    component: LourdesBeiraRioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LourdesBeiraRioPageRoutingModule {}
