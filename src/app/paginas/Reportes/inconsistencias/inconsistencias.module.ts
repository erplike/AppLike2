import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InconsistenciasPage } from './inconsistencias.page';

const routes: Routes = [
  {
    path: '',
    component: InconsistenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InconsistenciasPage]
})
export class InconsistenciasPageModule {}
