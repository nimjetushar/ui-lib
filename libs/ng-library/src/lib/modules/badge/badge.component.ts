import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 't-badge',
  template: `<i class="pi" [class]="badge" aria-hidden="true"></i>`,
})
export class BadgeComponent {
  @Input() badge!: string;

  @HostBinding('class') hostClass = 't-badge';
}
