/**
 * Created by navneetgupta on 8/9/17.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent }    from './login.component';
import { LoignRoutingModule } from './login-route.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoignRoutingModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [ ]
})

export class LoginModule {}
