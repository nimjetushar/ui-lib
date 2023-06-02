import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 't-badge',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() badge!: string;

  @HostBinding('class') get hostClass() {
    return `t-badge pi ${this.badge ?? ''}`;
  }
}
