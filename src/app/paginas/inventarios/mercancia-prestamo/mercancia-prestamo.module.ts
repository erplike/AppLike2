import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MercanciaPrestamoPage } from './mercancia-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: MercanciaPrestamoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MercanciaPrestamoPage]
})
export class MercanciaPrestamoPageModule {}
