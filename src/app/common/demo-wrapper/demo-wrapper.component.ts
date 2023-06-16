import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ToastService } from '@fourjs/ng-library';

import { IColumn, IDocOptions, IMethodOptions, IOptions } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let PR: any;

@Component({
  selector: 'ui-library-documentation-demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoWrapperComponent implements OnInit, AfterViewInit {
  @Input() header!: string;
  @Input() code!: string[];
  @Input() set options(docData: IOptions) {
    if (docData) {
      this.enableOptions = true;
      this.name = docData.name;
      this.docOptions = docData.options;
      this.methodOptions = docData.methods;
      if (docData.componentType) {
        this.componentType = docData.componentType;
      }
    }
  }

  @ViewChild('output', { static: true }) outputWrapper!: ElementRef;
  @ViewChild('ref', { static: true }) refWrapper!: ElementRef;

  isDemoContainer!: boolean;
  codeEle!: { content: string; class: string }[];
  enableOutput = true;
  enableDoc = true;
  enableOptions!: boolean;
  name!: string;
  docOptions: IDocOptions[] | undefined;
  methodOptions!: IMethodOptions[] | undefined;
  componentType = 'Component';
  docColumns: IColumn<keyof IDocOptions>[] = [
    { label: 'Name', value: 'parameter', width: '20%' },
    { label: 'Type', value: 'type', width: '20%' },
    { label: 'Default', value: 'default', width: '20%' },
    { label: 'Description', value: 'description', width: '40%' },
  ];

  methodColumns: IColumn<keyof IMethodOptions>[] = [
    { label: 'Name', value: 'method', width: '20%' },
    { label: 'Parameters', value: 'parameter', width: '20%' },
    { label: 'Description', value: 'description', width: '60%' },
  ];

  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    this.enableOutput = !this.outputWrapper.nativeElement.childNodes.length;
    this.enableDoc = !this.refWrapper.nativeElement.childNodes.length;
  }

  ngAfterViewInit(): void {
    PR.prettyPrint();
  }

  copyToClipboard(): void {
    const copyEle = document.createElement('input');
    document.body.appendChild(copyEle);
    const codeSample = this.code.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    copyEle.setAttribute('value', codeSample);
    copyEle.select();
    document.execCommand('copy');
    document.body.removeChild(copyEle);

    this.toast.show({ message: 'Copied...', type: 'info' });
  }
}