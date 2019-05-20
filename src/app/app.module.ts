import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiLibrary } from 'ui-library';
import { Common } from './demo/common/common.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityComponent } from './demo/utility/utility.component';
import { ReferenceComponent } from './demo/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiLibrary,
    Common
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
