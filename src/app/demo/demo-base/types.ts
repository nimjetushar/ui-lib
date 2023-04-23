export interface IColumn<T = string> {
  label: string;
  value: T;

  class?: string;
  width?: string;
}

export interface IDocOptions {
  parameter: string;
  description: string;
  type: string;
  default?: string | boolean;
}

export interface IMethodOptions {
  method: string;
  parameter: string;
  description: string;
}

export interface IOptions {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: IDocOptions[];
  methods?: IMethodOptions[];
}
