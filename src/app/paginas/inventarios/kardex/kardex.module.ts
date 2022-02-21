import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../../../table/table.component';

import { IonicModule } from '@ionic/angular';

import { KardexPage } from './kardex.page';

const routes: Routes = [
  {
    path: '',
    component: KardexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KardexPage, TableComponent],
  entryComponents: [TableComponent]
})
export class KardexPageModule {}
