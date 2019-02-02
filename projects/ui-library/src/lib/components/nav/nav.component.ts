import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from './nav.interface';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() menuItems: Array<MenuItem> = [];

  @Output() sliderStatus: EventEmitter<boolean> = new EventEmitter();

  expanded: boolean;

  constructor() { }

  toggleMenu(): void {
    this.expanded = !this.expanded;
    this.sliderStatus.emit(this.expanded);
  }

}
