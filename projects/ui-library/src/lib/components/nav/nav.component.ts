import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from './nav.interface';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() menuItems: Array<MenuItem> = [];
  @Input() set expanded(status: boolean) {
    this._expanded = status;
  }

  @Output() sliderStatus: EventEmitter<boolean> = new EventEmitter();

  private _expanded: boolean;

  constructor() { }

  toggleMenu(): void {
    this.expanded = !this._expanded;
    this.sliderStatus.emit(this._expanded);
  }

}
