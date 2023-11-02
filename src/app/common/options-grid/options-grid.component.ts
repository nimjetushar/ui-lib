import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Column, DocOptions, MethodOptions, Options } from '../types';

@Component({
  selector: 'ui-library-documentation-options-grid',
  templateUrl: './options-grid.component.html',
  styleUrls: ['./options-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'code-options' },
  encapsulation: ViewEncapsulation.None,
})
export class OptionsGridComponent {
  @Input({ required: true }) set options(docData: Options | undefined | null) {
    if (docData) {
      this.docOptions = docData.options;
      this.methodOptions = docData.methods;
      if (docData.componentType) {
        this.componentType = docData.componentType;
      }
    }
  }

  readonly notAvailableChar = '--';
  docOptions: DocOptions[] | undefined;
  methodOptions!: MethodOptions[] | undefined;
  componentType = 'Component';

  readonly methodColumns: Column<keyof MethodOptions>[] = [
    { label: 'Name', value: 'method', width: '20%' },
    { label: 'Parameters', value: 'parameter', width: '20%' },
    { label: 'Description', value: 'description', width: '60%' },
  ];

  readonly docColumns: Column<keyof DocOptions>[] = [
    { label: 'Name', value: 'parameter', width: '20%' },
    { label: 'Type', value: 'type', width: '20%' },
    { label: 'Default', value: 'default', width: '20%' },
    { label: 'Description', value: 'description', width: '40%' },
  ];
}
