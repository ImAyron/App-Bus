import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LourdesBeiraRioPageRoutingModule } from './lourdes-beira-rio-routing.module';

import { LourdesBeiraRioPage } from './lourdes-beira-rio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LourdesBeiraRioPageRoutingModule
  ],
  declarations: [LourdesBeiraRioPage]
})
export class LourdesBeiraRioPageModule {}
