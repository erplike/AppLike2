import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VentasPorMarcaPage } from './ventas-por-marca.page';

const routes: Routes = [
  {
    path: '',
    component: VentasPorMarcaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentasPorMarcaPage]
})
export class VentasPorMarcaPageModule {}
