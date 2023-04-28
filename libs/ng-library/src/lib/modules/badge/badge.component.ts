import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 't-badge',
  template: `<i class="pi" [class]="badge" aria-hidden="true"></i>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() badge!: string;

  @HostBinding('class') hostClass = 't-badge';
}
