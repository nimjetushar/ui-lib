import { ChangeDetectionStrategy, Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

@Component({
  selector: 'ui-library-documentation-copy',
  template: '',
  styles: [
    `
      .copy {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'copy fa-regular fa-copy fa-lg',
    '[attr.aria-hidden]': 'true',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CopyCodeComponent {
  @Input({ required: true }) content?: string | string[];

  constructor(private toast: ToastService) {}

  @HostListener('click')
  copyToClipboard(): void {
    const copyEle = document.createElement('input');
    document.body.appendChild(copyEle);
    const codeSample =
      typeof this.content === 'string'
        ? this.content
        : this.content?.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (!codeSample) {
      return;
    }

    copyEle.setAttribute('value', codeSample);
    copyEle.select();
    document.execCommand('copy');
    document.body.removeChild(copyEle);

    this.toast.show({ message: 'Copied...', type: 'info' });
  }
}
