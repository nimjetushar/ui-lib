import {
  Component,
  Input,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 't-navigate-top',
  template: `<div
    class="navigate-top"
    *ngIf="enableNavigator"
    (click)="navigateToTop()"
  >
    <i class="pi pi-chevron-up" aria-hidden="true"></i>
  </div> `,
  styleUrls: ['./navigate-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateTopComponent {
  @Input() height = 500;

  @HostBinding('class') hostClass = 't-navigate-top';

  enableNavigator = false;

  @HostListener('window:scroll')
  scrollEvent(): void {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    this.enableNavigator = top > this.height;
  }

  navigateToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
