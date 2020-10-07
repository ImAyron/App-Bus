import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoaVistaJacuiPage } from './boa-vista-jacui.page';

const routes: Routes = [
  {
    path: '',
    component: BoaVistaJacuiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoaVistaJacuiPageRoutingModule {}
