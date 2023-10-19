import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 't-menu-icon',
  template: ` <i class="fa-solid fa-2xl" [ngClass]="expanded ? 'fa-xmark' : 'fa-bars'"></i> `,
  styleUrls: ['./menu-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sidebar-toggle',
  },
})
export class MenuIconComponent {
  @Input({ required: true }) expanded!: boolean;
}
