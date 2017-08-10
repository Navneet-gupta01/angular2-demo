/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AdminComponent }    from './admin.component';
import { ManageAccountComponent } from './manage-account.component';
import { CentralWarehouseComponent } from './central-warehouse.component';
import { ManageStoreAdminComponent } from './manage-store-admin.component';
import { ManageStoresComponent } from './manage-stores.component';
import { StoreDetailsComponent } from './store-details.component';
import { AdminDetailsComponent } from './admin-details.component';

import { AdminRoutingModule } from './admin-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ManageAccountComponent,
    CentralWarehouseComponent,
    ManageStoreAdminComponent,
    ManageStoresComponent,
    StoreDetailsComponent,
    AdminDetailsComponent
  ],
  providers: [ ]
})

export class AdminModule {}
