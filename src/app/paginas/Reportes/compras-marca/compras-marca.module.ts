import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComprasMarcaPage } from './compras-marca.page';

const routes: Routes = [
  {
    path: '',
    component: ComprasMarcaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComprasMarcaPage]
})
export class ComprasMarcaPageModule {}
