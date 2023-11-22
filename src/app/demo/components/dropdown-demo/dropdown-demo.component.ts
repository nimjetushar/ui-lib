import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownComponent, DropdownOptions, TooltipPosition } from '@fourjs/ng-library';

import { Options, getComponentParameter } from '../../../common';

@Component({
  selector: 'ui-library-documentation-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownDemoComponent {
  readonly compSyntax: string[] = [
    `<t-dropdown placeholder="Select option" [options]="options" [(ngModel)]="value" [filter]="true" />`,
  ];

  readonly pageOptions = getDropdownComponentOptions();

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

  readonly tooltipOption: DropdownOptions<TooltipPosition>[] = [
    { label: 'top', value: 'top' },
    { label: 'right', value: 'right' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' },
  ];

  eventType?: string;
  value = 'Audi';
  tooltipDDValue?: string;
  tooltip?: string;
  tooltipPosition: TooltipPosition = 'left';
  changedContent = '';

  data? = { t: '' };

  constructor() {
    this.options = this.options.sort((a, b) => a.value.localeCompare(b.value));
  }

  modelChangeHandler(value: string): void {
    this.tooltip = value ? `Selected value is ${value}` : 'Please select value';
  }

  onChangeHandler(event: string | null): void {
    this.changedContent = `on change event ${event}`;
  }

  focusHandler(event: Event): void {
    this.eventType = event.type;
  }

  blurHandler(event: Event): void {
    this.eventType = event.type;
  }
}

const getDropdownComponentOptions = (): Options<DropdownComponent> => {
  const instance = new DropdownComponent();
  const getParameter = getComponentParameter(instance);

  return {
    name: 't-dropdown',
    options: [
      getParameter({
        parameter: 'placeholder',
        description: 'Default text to display when no option is selected.',
      }),
      getParameter({
        parameter: 'options',
        description: 'An array of objects to display as the available options.',
        type: 'Dropdown[]',
      }),
      getParameter({
        parameter: 'name',
        description: 'Name of the input element.',
      }),
      getParameter({
        parameter: 'scrollHeight',
        description: 'Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.',
      }),
      getParameter({
        parameter: 'disabled',
        description: 'Disabled dropdown',
      }),
      // {
      //   parameter: 'autofocus',
      //   type: 'boolean',
      //   default: 'false',
      //   description: 'Component should automatically get focus on load',
      // },
      getParameter({
        parameter: 'tooltip',
        type: 'any',
        description: 'Advisory information to display in a tooltip on hover.',
      }),
      {
        parameter: 'tooltipPosition',
        type: 'string',
        default: 'top',
        description: 'Position of the tooltip, valid values are right, left, top and bottom.',
      },
    ],
    methods: [
      {
        method: 'onFocus',
        parameter: 'event: Browser event',
        description: 'Callback to invoke when dropdown gets focus.',
      },
      {
        method: 'onBlur',
        parameter: 'event: Browser event',
        description: 'Callback to invoke when dropdown gets blur.',
      },
    ],
  };
};
