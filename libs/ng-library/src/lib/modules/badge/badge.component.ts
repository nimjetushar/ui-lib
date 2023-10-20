import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 't-badge',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input({ required: true }) badge!: string;

  @HostBinding('class') get hostClass() {
    return `t-badge ${this.badge ?? ''}`;
  }
}
