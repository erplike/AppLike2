import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VentasRecargaPage } from './ventas-recarga.page';

const routes: Routes = [
  {
    path: '',
    component: VentasRecargaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentasRecargaPage]
})
export class VentasRecargaPageModule {}
