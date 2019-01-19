import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [HttpService]
})
export class UiModule { }
