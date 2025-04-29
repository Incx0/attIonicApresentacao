import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevacessPage } from './devacess.page';

const routes: Routes = [
  {
    path: '',
    component: DevacessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevacessPageRoutingModule {}
