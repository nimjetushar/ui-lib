import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownOptions } from '@fourjs/ng-library';

import { IOptions } from '../../common';

@Component({
  selector: 'ui-library-documentation-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownDemoComponent {
  readonly compSyntax: string[] = [
    `<t-dropdown placeholder="Select option" [options]="options" [(ngModel)]="value" [filter]="true"></t-dropdown>`,
  ];

  readonly pageOptions: IOptions = {
    name: 't-dropdown',
    options: [
      {
        parameter: 'placeholder',
        type: 'string',
        description: 'Default text to display when no option is selected.',
      },
      {
        parameter: 'options',
        type: 'Dropdown[]',
        description: 'An array of objects to display as the available options.',
      },
      {
        parameter: 'name',
        type: 'string',
        description: 'Name of the input element.',
      },
      {
        parameter: 'scrollHeight',
        type: 'string',
        default: '200px',
        description:
          'Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.',
      },
      {
        parameter: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disabled dropdown',
      },
      {
        parameter: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Component cannot be edited',
      },
      {
        parameter: 'autofocus',
        type: 'boolean',
        default: 'false',
        description: 'Component should automatically get focus on load',
      },
      {
        parameter: 'tooltip',
        type: 'any',
        description: 'Advisory information to display in a tooltip on hover.',
      },
      {
        parameter: 'tooltipPosition',
        type: 'string',
        default: 'top',
        description:
          'Position of the tooltip, valid values are right, left, top and bottom.',
      },
    ],
    methods: [
      {
        method: 'onFocus',
        parameter: ['event: Browser event'],
        description: 'Callback to invoke when dropdown gets focus.',
      },
      {
        method: 'onBlur',
        parameter: ['event: Browser event'],
        description: 'Callback to invoke when dropdown gets blur.',
      },
    ],
  };

  readonly options: DropdownOptions<string>[] = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Mazda', value: 'Mazda' },
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Cadillac', value: 'Cadillac' },
    { label: 'Ford', value: 'Ford' },
    { label: 'GMC', value: 'GMC' },
    { label: 'Mercedes', value: 'Mercedes' },
  ];

  readonly tooltipOption: DropdownOptions<string>[] = [
    { label: 'top', value: 'top' },
    { label: 'right', value: 'right' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' },
  ];

  eventType?: string;
  value = 'Audi';
  tooltipDDValue?: string;
  tooltip?: string;
  tooltipPosition = 'left';

  data? = { t: '' };

  constructor() {
    this.options = this.options.sort((a, b) => a.value.localeCompare(b.value));
  }

  modelChangeHandler(value: string): void {
    this.tooltip = value ? `Selected value is ${value}` : 'Please select value';
  }

  focusHandler(event: Event): void {
    this.eventType = event.type;
  }

  blurHandler(event: Event): void {
    this.eventType = event.type;
  }
}
