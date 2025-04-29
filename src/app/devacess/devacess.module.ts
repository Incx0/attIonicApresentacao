import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevacessPageRoutingModule } from './devacess-routing.module';

import { DevacessPage } from './devacess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevacessPageRoutingModule
  ],
  declarations: [DevacessPage]
})
export class DevacessPageModule {}
