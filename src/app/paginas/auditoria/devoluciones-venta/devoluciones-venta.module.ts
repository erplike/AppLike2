import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevolucionesVentaPage } from './devoluciones-venta.page';

const routes: Routes = [
  {
    path: '',
    component: DevolucionesVentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevolucionesVentaPage]
})
export class DevolucionesVentaPageModule {}
