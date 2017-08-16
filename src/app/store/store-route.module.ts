/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store.component';
import { AuthGuard } from './store.authguard';

const appRoutes: Routes = [
  { path: 'store/home', component: StoreComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class StoreRoutingModule {}
