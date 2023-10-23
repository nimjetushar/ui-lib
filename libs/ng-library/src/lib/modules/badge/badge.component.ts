import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 't-badge',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 't-badge',
  },
})
export class BadgeComponent {
  @HostBinding('class')
  @Input()
  badge!: string;
}
