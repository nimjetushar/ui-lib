import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() logoSrc: string;

  @Output() sideBarToggled: EventEmitter<boolean> = new EventEmitter();

  handleSidebarToggle(): void {
    this.sideBarToggled.emit(true);
  }
}
