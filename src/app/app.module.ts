import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiLibrary } from 'ui-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityComponent } from './demo/utility/utility.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiLibrary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
