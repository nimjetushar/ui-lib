import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-library-documentation-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupComponent {
  readonly angularCdkDependency = '16.2.9';

  readonly syntax = `
    import { NgLibrary } from '@fourjs/ng-library';

    @NgModule({
        imports: [
          NgLibrary,
          BrowserAnimationsModule,
          HttpClientModule,
          FormsModule,
          // other modules imports
          ...
        ]
        ...
    })`;
}
