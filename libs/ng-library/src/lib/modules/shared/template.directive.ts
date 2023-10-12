import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tTemplate]',
  standalone: true,
})
export class TemplateDirective {
  @Input() type: string | undefined;

  @Input('tTemplate') name: string | undefined;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name!;
  }
}
