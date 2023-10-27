export type Column<T = string> = {
  label: string;
  value: T;

  class?: string;
  width?: string;
};

export type DocOptions<T extends object = any, Key extends keyof T = keyof T> = {
  parameter: Key;
  description: string;
  type: string;
  default?: string;
};

export type MethodOptions<T extends object = any, Key extends keyof T = keyof T> = {
  method: Key;
  parameter: string;
  description: string;
};

/**
 * @deprecated The interface is been deprecated, use Options
 */
export interface IOptions<T = string> {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: any[];
  methods?: any[];
}

export type Options<T extends object = any> = {
  name: string;
  componentType?: 'Service' | 'Component' | 'Directive';
  options?: Array<DocOptions<T>>;
  methods?: Array<MethodOptions<T>>;
};

export interface DemoParameters<T extends object> {
  componentSyntax: string[];
  importSyntax: `import { ${string} } from "@fourjs/ng-library";`;
  options: Options<T>;
}
