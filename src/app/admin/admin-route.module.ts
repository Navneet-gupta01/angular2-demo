/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const appRoutes: Routes = [
  { path: 'admin/home', component: AdminComponent },
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
