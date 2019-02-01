import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from './nav.interface';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() menuItems: Array<MenuItem> = [];

  @Output() sliderStatus: EventEmitter<boolean> = new EventEmitter();

  expanded: boolean;

  constructor() { }

  ngOnInit(): void { }

  toggleMenu(): void {
    this.expanded = !this.expanded;
    this.sliderStatus.emit(this.expanded);
  }

}
