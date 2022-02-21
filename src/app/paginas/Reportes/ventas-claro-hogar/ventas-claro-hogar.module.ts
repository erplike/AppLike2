import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VentasClaroHogarPage } from './ventas-claro-hogar.page';

const routes: Routes = [
  {
    path: '',
    component: VentasClaroHogarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentasClaroHogarPage]
})
export class VentasClaroHogarPageModule {}
