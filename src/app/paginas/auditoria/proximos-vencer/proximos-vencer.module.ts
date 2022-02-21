import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProximosVencerPage } from './proximos-vencer.page';

const routes: Routes = [
  {
    path: '',
    component: ProximosVencerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProximosVencerPage]
})
export class ProximosVencerPageModule {}
