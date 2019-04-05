import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      {
        path: 'leads',
        children: [
          {
            path: '',
            loadChildren: '../pages/leads/leads.module#LeadsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsPageModule { }
