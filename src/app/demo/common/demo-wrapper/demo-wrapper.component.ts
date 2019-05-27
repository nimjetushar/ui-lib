import { attributes } from './../../../constants/constants';
import {
  Component, Input, OnInit, ViewEncapsulation,
  ViewChild, ElementRef
} from '@angular/core';
import { ToastService } from 'projects/ui-library/src/lib/services/toast.service';

interface Column {
  label: string;
  value: string;
  class?: string;
}

interface DocOptions {
  parameter: string;
  desc: string;
  type: string;
  default?: string | boolean;
}

interface MethodOptions {
  method: string;
  param: string[];
  desc: string;
}

export interface Options {
  name: string;
  componentType?: 'Service' | 'Component';
  options?: DocOptions[];
  methods?: MethodOptions[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'demo-wrapper',
  templateUrl: './demo-wrapper.component.html',
  styleUrls: ['./demo-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoWrapperComponent implements OnInit {
  @Input() header: string;
  @Input() code: string = '';
  @Input() set options(docData: Options) {
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

  @ViewChild('output') outputWrapper: ElementRef;
  @ViewChild('ref') refWrapper: ElementRef;

  isDemoContainer: boolean;
  codeEle: Array<{ content: string; class: string }>;
  enableOutput: boolean = true;
  enableDoc: boolean = true;
  enableOptions: boolean;
  name: string;
  docOptions: DocOptions[];
  methodOptions: MethodOptions[];
  componentType: string = 'Component';
  docColumns: Array<Column> = [
    { label: 'Name', value: 'parameter' },
    { label: 'Type', value: 'type' },
    { label: 'Default', value: 'default' },
    { label: 'Description', value: 'desc', class: 'desc' }
  ];

  methodColumns: Array<Column> = [
    { label: 'Name', value: 'method' },
    { label: 'Parameters', value: 'param' },
    { label: 'Description', value: 'desc', class: 'desc' }
  ];

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
    this.generateCodeSnipet();
    this.enableOutput = !this.outputWrapper.nativeElement.childNodes.length;
    this.enableDoc = !this.refWrapper.nativeElement.childNodes.length;
  }

  copyToClipboard(): void {
    const copyEle = document.createElement('input');
    document.body.appendChild(copyEle);
    copyEle.setAttribute('value', this.code);
    copyEle.select();
    document.execCommand('copy');
    document.body.removeChild(copyEle);

    this.toast.show({ message: 'Copied...', type: 'info' });
  }

  private generateCodeSnipet(): void {
    const htmlEle = this.code && this.code.split(' ') || [];
    let renderCodeEle = [];
    for (const item of htmlEle) {
      renderCodeEle = renderCodeEle.concat(this.contentMapper(item));
    }
    this.codeEle = renderCodeEle;
  }

  /**
   * converts the input syntax into proper html content and renders into UI
   * @private
   * @param {string} ele
   * @returns {Array<{ content: string; class: string }>}
   * @memberof DemoWrapperComponent
   */
  private contentMapper(ele: string): Array<{ content: string; class: string }> {
    if (ele.trim() === '/n') {
      return [{
        content: '',
        class: 'b'
      }];
    }

    if (ele.includes('<t-') || ele.includes('</t-')) {
      return [{
        content: ele,
        class: 'ne'
      }];
    }

    for (const item of attributes) {
      if (ele.includes(item)) {
        const e = ele.split(item)[1],
          list = [{
            content: item,
            class: 'na'
          }];
        if (e) {
          list.push({
            content: e,
            class: 'a'
          });
        }
        return list;
      }
    }

    return [{
      content: ele,
      class: 'a'
    }];
  }
}
