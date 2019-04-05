import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './../../components/header/header.component';
import { DashboardPage } from './dashboard.page';



const routes: Routes = [
  {
    path: '',
    component: DashboardPage
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
  declarations: [DashboardPage, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPageModule { }