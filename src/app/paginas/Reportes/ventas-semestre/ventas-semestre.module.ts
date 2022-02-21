import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VentasSemestrePage } from './ventas-semestre.page';

const routes: Routes = [
  {
    path: '',
    component: VentasSemestrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentasSemestrePage]
})
export class VentasSemestrePageModule {}
