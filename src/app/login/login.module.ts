/**
 * Created by navneetgupta on 8/9/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MenuService } from '../common/shared.services';
import { LoginComponent } from './login.component';
import { LoignRoutingModule } from './login-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LoignRoutingModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    MenuService
  ]
})

export class LoginModule {}
