/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { StoreComponent } from './store.component';

const appRoutes: Routes = [
  { path: 'store/home', component: StoreComponent },
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
