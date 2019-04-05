import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeadsPage } from './leads.page';

const routes: Routes = [
  {
    path: '',
    component: LeadsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [LeadsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeadsPageModule { }
