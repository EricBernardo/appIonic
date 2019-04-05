import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LeadsPage } from './leads.page';



const routes: Routes = [
  {
    path: '',
    component: LeadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [LeadsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeadsPageModule { }

