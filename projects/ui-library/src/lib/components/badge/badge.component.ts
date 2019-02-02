import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-badge',
  template: `<i class="fa {{badge}}" aria-hidden="true"></i>`
})
export class BadgeComponent {

  @Input() badge: string;
}
