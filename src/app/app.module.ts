import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiLibrary } from 'ui-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './demo/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent
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
