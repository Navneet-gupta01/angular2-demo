/**
 * Created by navneetgupta on 8/9/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AdminComponent }    from './admin.component';

import { AdminRoutingModule } from './admin-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [ ]
})

export class AdminModule {}
