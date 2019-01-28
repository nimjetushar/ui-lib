import { NgModule } from '@angular/core';

import { HttpService } from './services/http.service';
import { Components, ExportedComponents } from './components';

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
  ],
  providers: [HttpService],
  exports: [
    ...ExportedComponents
  ]
})
export class UiLibrary { }
