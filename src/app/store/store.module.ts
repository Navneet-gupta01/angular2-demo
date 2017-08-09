/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { StoreComponent }    from './store.component';
import { StoreRoutingModule } from './store-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule,
    HttpClientModule
  ],
  declarations: [
    StoreComponent
  ],
  providers: [ ]
})

export class StoreModule {}
