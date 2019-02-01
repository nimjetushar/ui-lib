import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-badge',
  template: `<i class="fa" [class]="badge"></i>`
})
export class BadgeComponent {

  @Input() badge: string;

  constructor() { }

}
