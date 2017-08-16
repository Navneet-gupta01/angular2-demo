/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './store.authguard';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule,
    HttpModule
  ],
  declarations: [
    StoreComponent
  ],
  providers: [
   AuthGuard
  ]
})

export class StoreModule {}
