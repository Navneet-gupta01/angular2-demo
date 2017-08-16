/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageAccountComponent } from './manage-account.component';
import { CentralWarehouseComponent } from './central-warehouse.component';
import { ManageStoreAdminComponent } from './manage-store-admin.component';
import { ManageStoresComponent } from './manage-stores.component';
import { StoreDetailsComponent } from './store-details.component';
import { AdminDetailsComponent } from './admin-details.component';
import { AuthGuard } from './admin.authguard';


const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {path: 'admin', component: AdminComponent},
          {path: 'account', component: ManageAccountComponent},
          {path: 'warehouse', component: CentralWarehouseComponent},
          {path: 'stores', component: ManageStoresComponent},
          {path: 'stores/:id', component: StoreDetailsComponent},
          {path: 'admins', component: ManageStoreAdminComponent},
          {path: 'admins/:id', component: AdminDetailsComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
