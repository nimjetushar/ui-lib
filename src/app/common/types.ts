export type Column<T = string> = {
  label: string;
  value: T;

  class?: string;
  width?: string;
};

export type DocOptions<T = string> = {
  parameter: T;
  description: string;
  type: string;
  default?: string;
};

export type MethodOptions = {
  method: string;
  parameter: string;
  description: string;
};

/**
 * @deprecated The interface is been deprecated, use Options
 */
export interface IOptions<T = string> {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: DocOptions<T>[];
  methods?: MethodOptions[];
}

export type Options<T extends string = string> = {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: DocOptions<T>[];
  methods?: MethodOptions[];
};
