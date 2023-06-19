export interface IColumn<T = string> {
  label: string;
  value: T;

  class?: string;
  width?: string;
}

export interface IDocOptions<T = string> {
  parameter: T;
  description: string;
  type: string;
  default?: string;
}

export interface IMethodOptions {
  method: string;
  parameter: string[];
  description: string;
}

export interface IOptions<T = string> {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: IDocOptions<T>[];
  methods?: IMethodOptions[];
}
