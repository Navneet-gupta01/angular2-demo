import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
import { MenuService } from './common/shared.services';
import { LoginModule } from './login/login.module';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './common/404.component';
import { UnAuthenticatedComponent } from './common/401.component';
import { UnAuthorizedComponent } from './common/403.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnAuthenticatedComponent,
    UnAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    AdminModule,
    StoreModule,
    AppRoutingModule,
    // ** Order of module imports array matter. Notice that the AppRoutingModule is last. Most importantly,
    // it comes after all the module due to wild card matching
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
