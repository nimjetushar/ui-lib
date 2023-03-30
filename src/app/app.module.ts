import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule, ToastService } from '@fourjs/ng-library';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { Common } from './demo/common/common.module';
import { ReferenceComponent } from './demo/reference/reference.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ReferenceComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, Common, MenuModule],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
