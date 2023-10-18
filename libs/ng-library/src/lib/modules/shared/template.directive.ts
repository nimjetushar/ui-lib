import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tTemplate]',
  standalone: true,
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class UITemplate {
  @Input() type: string | undefined;

  @Input('tTemplate') name: string | undefined;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name as string;
  }
}
