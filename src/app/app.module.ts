import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from '@fourjs/ng-library';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { Common } from './common';
import { ReferenceComponent } from './demo/components/reference/reference.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ReferenceComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, Common, MenuModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
