import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 't-navigate-top',
  templateUrl: './navigate-top.component.html',
  styleUrls: ['./navigate-top.component.scss']
})
export class NavigateTopComponent {

  @Input() height: number = 500;

  enableNavigator: boolean;

  @HostListener('window:scroll')
  scrollEvent(): void {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    this.enableNavigator = (top > this.height);
  }

  navigateToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
