import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiLibrary } from 'ui-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './demo/developer/developer.component';
import { ColorPalletComponent } from './demo/color-pallet/color-pallet.component';
import { SetupComponent } from './demo/setup/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    ColorPalletComponent,
    SetupComponent
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
