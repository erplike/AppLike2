import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PospagoSegmentoPage } from './pospago-segmento.page';

const routes: Routes = [
  {
    path: '',
    component: PospagoSegmentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PospagoSegmentoPage]
})
export class PospagoSegmentoPageModule {}
