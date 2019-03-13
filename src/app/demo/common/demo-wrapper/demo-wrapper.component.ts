import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss']
})
export class DemoWrapperComponent {
  @Input() header: string;

  constructor() { }
}
