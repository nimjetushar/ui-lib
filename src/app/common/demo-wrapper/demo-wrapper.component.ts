import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ToastService, UITemplate } from '@fourjs/ng-library';

import { Options } from '../types';

declare let PR: any;

@Component({
  selector: 'ui-library-documentation-demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoWrapperComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) header!: string;
  @Input() subHeader?: string;
  @Input() code?: string[];
  @Input()
  set options(docData: Options | undefined | null) {
    if (docData) {
      this.enableOptions = true;
      this._options = docData;
    }
  }
  get options() {
    return this._options;
  }

  @ViewChild('output', { static: true }) outputWrapper!: ElementRef;
  @ViewChild('ref', { static: true }) refWrapper!: ElementRef;
  @ContentChildren(UITemplate) templates!: QueryList<UITemplate>;

  outputContent: TemplateRef<any>[] = [];
  enableOutput = true;
  enableDoc = true;
  enableOptions!: boolean;

  private _options?: Options | null;

  constructor(private toast: ToastService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.enableOutput = !this.outputWrapper.nativeElement.childNodes.length;
    this.enableDoc = !this.refWrapper.nativeElement.childNodes.length;
  }

  ngAfterViewInit(): void {
    PR.prettyPrint();

    this.outputContent = [];
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'output':
          this.outputContent.push(item.template);
          break;
      }
    });
    this.cdr.detectChanges();
  }

  copyToClipboard(): void {
    const copyEle = document.createElement('input');
    document.body.appendChild(copyEle);
    const codeSample = this.code?.reduce((accumulator, currentValue) => accumulator + currentValue);
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
