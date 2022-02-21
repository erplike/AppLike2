import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportesEdadesPage } from './reportes-edades.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesEdadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportesEdadesPage]
})
export class ReportesEdadesPageModule {}
