import { Component, Input } from '@angular/core';

@Component({
  selector: 't-navigate-top',
  templateUrl: './navigate-top.component.html',
  styleUrls: ['./navigate-top.component.scss']
})
export class NavigateTopComponent {

  @Input() height: number = 500;

  navigateToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  enableBtn(): boolean {
    if (this.height) {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      return top > this.height;
    }
    return true;
  }
}
