import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoaVistaJacuiPageRoutingModule } from './boa-vista-jacui-routing.module';

import { BoaVistaJacuiPage } from './boa-vista-jacui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoaVistaJacuiPageRoutingModule
  ],
  declarations: [BoaVistaJacuiPage]
})
export class BoaVistaJacuiPageModule {}
