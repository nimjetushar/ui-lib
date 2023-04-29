/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropdownOptions } from '../dropdown';

export type DynamicFieldType =
  | 'text'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'number';

export type DynamicFields<T = string> = {
  label: string;
  type: DynamicFieldType;
  model: T;
  name: string;
};

export type DynamicFieldButtonOptions = {
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondaryButton?: boolean;
};

export type DynamicFieldDisabledOptions<Type = any> = {
  [Property in keyof Partial<Type>]: boolean;
};

export type DynamicFieldDropdownOptions<Type = any> = {
  [Property in keyof Partial<Type>]: DropdownOptions[];
};

export type DynamicFieldDataModel<Type = any> = {
  [Property in keyof Partial<Type>]: Type[Property];
};
